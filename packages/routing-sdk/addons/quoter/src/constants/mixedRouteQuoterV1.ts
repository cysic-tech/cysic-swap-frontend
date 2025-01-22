import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import type { Address } from 'viem'

// = 1 << 23 or 100000000000000000000000
export const EMPTY_FEE_PATH_PLACEHOLDER = 8388608

export const MIXED_ROUTE_QUOTER_ADDRESSES = {
  [ChainId.CYSIC]: cysicMetadata.MixedRouteQuoterV1 as `0x${string}`,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.MixedRouteQuoterV1 as `0x${string}`,
} as const satisfies Record<ChainId, Address>
