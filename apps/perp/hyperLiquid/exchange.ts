import { API } from './api'
import { MAINNET_API_URL } from './constants'
import { Info } from './info'
// import {
//   OrderType,
//   OrderRequest,
//   // CancelByCloidRequest,
//   // CancelRequest,
//   // ModifyRequest,
//   // ScheduleCancelAction,
//   // getTimestampMs,
//   // orderRequestToOrderWire,
//   // signAgent,
//   // signApproveBuilderFee,
//   // signConvertToMultiSigUserAction,
//   // signMultiSigAction,
//   // signSpotTransferAction,
//   // signUsdClassTransferAction,
//   // signUsdTransferAction,
//   // signWithdrawFromBridgeAction,
// } from './utils/signing'
import {
  ModifyRequest,
  OrderRequest,
  OrderType,
  OrderWire,
  getTimestampMs,
  orderRequestToOrderWire,
  orderWiresToOrderAction,
  signL1Action,
} from './utils/signing'
import { BuilderInfo, Meta, SpotMeta } from './utils/types'

// Define the Exchange class
export class Exchange extends API {
  private wallet: any

  private vaultAddress?: string

  private accountAddress?: string

  private info: Info

  // Default Max Slippage for Market Orders: 5%
  private static DEFAULT_SLIPPAGE: number = 0.05

  constructor(
    wallet: any,
    baseUrl?: string,
    meta?: Meta,
    vaultAddress?: string,
    accountAddress?: string,
    spotMeta?: SpotMeta,
  ) {
    super(baseUrl)
    this.wallet = wallet
    this.vaultAddress = vaultAddress
    this.accountAddress = accountAddress
    this.info = new Info(baseUrl, true, meta, spotMeta)
  }

  private postAction(action: any, signature: any, nonce: number): Promise<any> {
    const payload: any = {
      action,
      nonce,
      signature,
      vaultAddress: action.type !== 'usdClassTransfer' ? this.vaultAddress : undefined,
    }
    console.debug(payload)
    return this.post('/exchange', payload)
  }

  private slippagePrice(name: string, isBuy: boolean, slippage: number, px?: number): number {
    const coin = this.info.nameToCoin[name]
    if (!px) {
      // Get midprice
      // eslint-disable-next-line no-param-reassign
      px = parseFloat(this.info.allMids()[coin])
    }

    // spot assets start at 10000
    const isSpot = this.info.coinToAsset[coin] >= 10_000

    // Calculate Slippage
    // eslint-disable-next-line no-param-reassign
    px *= isBuy ? 1 + slippage : 1 - slippage

    // We round px to 5 significant figures and 6 decimals for perps, 8 decimals for spot
    const decimals = isSpot ? 8 : 6
    return parseFloat(parseFloat(px.toPrecision(5)).toFixed(decimals))
  }

  public async order(
    name: string,
    isBuy: boolean,
    sz: number,
    limitPx: number,
    orderType: OrderType,
    reduceOnly: boolean = false,
    cloid?: string,
    builder?: BuilderInfo,
  ): Promise<any> {
    const orderRequest: OrderRequest = {
      coin: name,
      is_buy: isBuy,
      sz,
      limit_px: limitPx,
      order_type: orderType,
      reduce_only: reduceOnly,
    }

    if (cloid) {
      orderRequest.cloid = cloid
    }

    return this.bulkOrders([orderRequest], builder)
  }

  public async bulkOrders(orderRequests: OrderRequest[], builder?: BuilderInfo): Promise<any> {
    const orderWires: OrderWire[] = orderRequests.map((order) =>
      orderRequestToOrderWire(order, this.info.nameToAsset(order.coin)),
    )
    const timestamp = getTimestampMs()

    if (builder) {
      // eslint-disable-next-line no-param-reassign
      builder.b = builder.b.toLowerCase()
    }

    const orderAction = orderWiresToOrderAction(orderWires, builder?.b)

    const signature = await signL1Action(
      this.wallet,
      orderAction,
      this.vaultAddress ?? null,
      timestamp,
      this.getBaseUrl() === MAINNET_API_URL,
    )

    return this.postAction(orderAction, signature, timestamp)
  }

  public async modifyOrder(
    oid: number | string,
    name: string,
    isBuy: boolean,
    sz: number,
    limitPx: number,
    orderType: OrderType,
    reduceOnly: boolean = false,
    cloid?: string,
  ): Promise<any> {
    const modifyRequest: ModifyRequest = {
      oid,
      order: {
        coin: name,
        is_buy: isBuy,
        sz,
        limit_px: limitPx,
        order_type: orderType,
        reduce_only: reduceOnly,
        cloid,
      },
    }
    return this.bulkModifyOrdersNew([modifyRequest])
  }

  public async bulkModifyOrdersNew(modifyRequests: ModifyRequest[]): Promise<any[]> {
    const timestamp = getTimestampMs()
    const modifyWires = modifyRequests.map((modify) => ({
      oid: modify.oid instanceof Cloid ? modify?.oid?.toRaw?.() : modify.oid,
      order: orderRequestToOrderWire(modify.order, this.info.nameToAsset(modify.order.coin)),
    }))

    const modifyAction = {
      type: 'batchModify',
      modifies: modifyWires,
    }

    const signature = await signL1Action(
      this.wallet,
      modifyAction,
      this.vaultAddress ?? null,
      timestamp,
      this.getBaseUrl() === MAINNET_API_URL,
    )

    return this.postAction(modifyAction, signature, timestamp)
  }
}
