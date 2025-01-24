import { ChainId } from '@pancakeswap/chains'
import { ERC20Token } from '@pancakeswap/sdk'
import { cysicTestnetTokens, cysicTokens } from '@pancakeswap/tokens'
import type { FarmV3SupportedChainId } from '../../src'
import type { CommonPrice } from '../../src/fetchFarmsV3'

export const CAKE_BNB_LP_MAINNET = '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0'

export type PriceHelper = {
  list: ERC20Token[]
}

export const priceHelperTokens = {
  [ChainId.CYSIC]: {
    list: [cysicTokens.wbnb],
  },
  [ChainId.CYSIC_TESTNET]: {
    list: [cysicTestnetTokens.wbnb],
  },
} satisfies Record<number, PriceHelper>

// for testing purposes
export const DEFAULT_COMMON_PRICE: Record<FarmV3SupportedChainId, CommonPrice> = {
  [ChainId.CYSIC]: {},
  [ChainId.CYSIC_TESTNET]: {},
}
