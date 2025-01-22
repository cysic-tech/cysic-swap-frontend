import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import type { Address } from 'viem'

export const V3_QUOTER_ADDRESSES = {
  [ChainId.CYSIC]: cysicMetadata.QuoterV2 as `0x${string}`,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.QuoterV2 as `0x${string}`,
} as const satisfies Record<ChainId, Address>
