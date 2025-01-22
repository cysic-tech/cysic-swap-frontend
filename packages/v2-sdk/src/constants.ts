import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import type { Address, Hash } from 'viem'

export const FACTORY_ADDRESS = cysicMetadata.PancakeFactory as `0x${string}`

export const FACTORY_ADDRESS_MAP = {
  [ChainId.CYSIC]: FACTORY_ADDRESS,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.PancakeFactory as `0x${string}`,
} as const satisfies Record<ChainId, Address>

export const INIT_CODE_HASH = cysicMetadata.InitCodeHash

export const INIT_CODE_HASH_MAP = {
  [ChainId.CYSIC]: INIT_CODE_HASH as `0x${string}`,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.InitCodeHash as `0x${string}`,
} as const satisfies Record<ChainId, Hash>
