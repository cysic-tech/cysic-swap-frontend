import { ChainId } from '@pancakeswap/chains'
import { Address, Hash } from 'viem'
import { cysicMetadata, cysicTestnetMetadata } from '../../ca-config'

const FACTORY_ADDRESS = cysicMetadata.PancakeV3Factory as `0x${string}`

/**
 * To compute Pool address use DEPLOYER_ADDRESSES instead
 */
export const FACTORY_ADDRESSES = {
  [ChainId.CYSIC]: FACTORY_ADDRESS,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.PancakeV3Factory as `0x${string}`,
} as const satisfies Record<ChainId, Address>

const DEPLOYER_ADDRESS = cysicMetadata.PancakeV3PoolDeployer as `0x${string}`

export const DEPLOYER_ADDRESSES = {
  [ChainId.CYSIC]: DEPLOYER_ADDRESS,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.PancakeV3PoolDeployer as `0x${string}`,
} as const satisfies Record<ChainId, Address>

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

const POOL_INIT_CODE_HASH = cysicMetadata.InitCodeHash

export const POOL_INIT_CODE_HASHES = {
  [ChainId.CYSIC]: POOL_INIT_CODE_HASH,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.InitCodeHash,
} as const satisfies Record<ChainId, Hash>

const NFT_POSITION_MANAGER_ADDRESS = cysicMetadata.NonfungiblePositionManager

export const NFT_POSITION_MANAGER_ADDRESSES = {
  [ChainId.CYSIC]: NFT_POSITION_MANAGER_ADDRESS,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.NonfungiblePositionManager,
} as const satisfies Record<ChainId, Address>

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 2500,
  HIGH = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 50,
  [FeeAmount.HIGH]: 200,
}
