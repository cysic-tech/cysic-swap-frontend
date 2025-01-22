import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

// = 1 << 23 or 100000000000000000000000
export const V2_FEE_PATH_PLACEHOLDER = 8388608

export const MSG_SENDER = '0x0000000000000000000000000000000000000001'
export const ADDRESS_THIS = '0x0000000000000000000000000000000000000002'

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.CYSIC]: cysicMetadata.MixedRouteQuoterV1 as `0x${string}`,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.MixedRouteQuoterV1 as `0x${string}`,
} as const satisfies Record<ChainId, Address>

export const V3_QUOTER_ADDRESSES = {
  [ChainId.CYSIC]: cysicMetadata.QuoterV2 as `0x${string}`,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.QuoterV2 as `0x${string}`,
} as const satisfies Record<ChainId, Address>

const TICK_LENS_MAINNET_ADDRESS = cysicMetadata.TickLens as `0x${string}`
const TICK_LENS_TESTNET_ADDRESS = cysicTestnetMetadata.TickLens as `0x${string}`
export const V3_TICK_LENS_ADDRESSES = {
  [ChainId.CYSIC]: TICK_LENS_MAINNET_ADDRESS,
  [ChainId.CYSIC_TESTNET]: TICK_LENS_TESTNET_ADDRESS,
} as const satisfies Record<ChainId, Address>
