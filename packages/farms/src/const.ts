import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import uniq from 'lodash/uniq'

// @todo remove all other v2/v3 and type definitions
export const supportedChainIdV4 = [ChainId.CYSIC, ChainId.CYSIC_TESTNET] as const

export const supportedChainIdV2 = [ChainId.CYSIC, ChainId.CYSIC_TESTNET] as const
export const supportedChainIdV3 = [ChainId.CYSIC, ChainId.CYSIC_TESTNET] as const
export const supportedChainId = uniq([...supportedChainIdV2, ...supportedChainIdV3])
export const bCakeSupportedChainId = [] as const

export const FARM_AUCTION_HOSTING_IN_SECONDS = 691200

export type FarmSupportedChainId = (typeof supportedChainId)[number]

export type FarmV2SupportedChainId = (typeof supportedChainIdV2)[number]

export type FarmV3SupportedChainId = (typeof supportedChainIdV3)[number]

export type FarmV4SupportedChainId = (typeof supportedChainIdV4)[number]

export const masterChefAddresses = {
  [ChainId.CYSIC_TESTNET]: '0x',
  [ChainId.CYSIC]: '0x',
} as const

export const masterChefV3Addresses = {
  [ChainId.CYSIC]: cysicMetadata.MasterChefV3,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.MasterChefV3,
} as const satisfies Record<FarmV3SupportedChainId, string>

export const crossFarmingVaultAddresses = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
} as const
