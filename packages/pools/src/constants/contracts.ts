import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

import { SupportedChainId } from './supportedChains'

export type ContractAddresses<T extends ChainId = SupportedChainId> = {
  [chainId in T]: Address
}

export const ICAKE = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_VAULT = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>

export const CAKE_FLEXIBLE_SIDE_VAULT = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
} as const satisfies ContractAddresses<SupportedChainId>
