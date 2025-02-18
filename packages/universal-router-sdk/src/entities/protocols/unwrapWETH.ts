import { ChainId } from '@pancakeswap/chains'
import { BigintIsh, WETH9 } from '@pancakeswap/sdk'
import invariant from 'tiny-invariant'
import { ROUTER_AS_RECIPIENT } from '../../constants'
import { encodeInputTokenOptions } from '../../utils/inputTokens'
import { CommandType, RoutePlanner } from '../../utils/routerCommands'
import { Command, RouterTradeType, TradeConfig } from '../Command'
import { Permit2Signature } from '../types'

export class UnwrapWETH implements Command {
  readonly tradeType: RouterTradeType = RouterTradeType.UnwrapWETH

  readonly permit2Data: Permit2Signature | undefined

  readonly wethAddress: string

  readonly amount: BigintIsh

  constructor(amount: BigintIsh, chainId: ChainId, permit2?: Permit2Signature) {
    // 确保 chainId 存在于 WETH9 映射中
    if (!(chainId in WETH9)) {
      throw new Error(`ChainId ${chainId} not supported`)
    }

    this.wethAddress = WETH9[chainId as keyof typeof WETH9].address
    this.amount = amount

    if (permit2) {
      invariant(
        permit2.details.token.toLowerCase() === this.wethAddress.toLowerCase(),
        `must be permitting WETH address: ${this.wethAddress}`,
      )
      invariant(permit2.details.amount >= amount, `Did not permit enough WETH for unwrapWETH transaction`)
      this.permit2Data = permit2
    }
  }

  encode(planner: RoutePlanner, _: TradeConfig): void {
    encodeInputTokenOptions(planner, {
      permit2Permit: this.permit2Data,
      permit2TransferFrom: {
        token: this.wethAddress,
        amount: this.amount.toString(),
      },
    })
    planner.addCommand(CommandType.UNWRAP_WETH, [ROUTER_AS_RECIPIENT, BigInt(this.amount.toString())])
  }
}
