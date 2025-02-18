import { ChainId } from '@pancakeswap/chains'

export const SUPPORTED_CHAINS = [ChainId.CYSIC, ChainId.CYSIC_TESTNET, ChainId.BSC, ChainId.BSC_TESTNET] as const

export type SupportedChainId = (typeof SUPPORTED_CHAINS)[number]
