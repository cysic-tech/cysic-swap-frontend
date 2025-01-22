import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { Token } from '@pancakeswap/sdk'
import { cysicTestnetTokens, cysicTokens } from '@pancakeswap/tokens'

import { ChainMap, ChainTokenList } from '../types'

export const SMART_ROUTER_ADDRESSES = {
  [ChainId.CYSIC]: cysicMetadata.SmartRouter,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.SmartRouter,
} as const satisfies Record<ChainId, string>

export const V2_ROUTER_ADDRESS: ChainMap<string> = {
  [ChainId.CYSIC]: cysicMetadata.PancakeRouter,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.PancakeRouter,
}

export const STABLE_SWAP_INFO_ADDRESS: ChainMap<string> = {
  [ChainId.CYSIC]: '',
  [ChainId.CYSIC_TESTNET]: '',
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  [ChainId.CYSIC]: [cysicTokens.wbnb, cysicTokens.cake],
  [ChainId.CYSIC_TESTNET]: [cysicTestnetTokens.wbnb, cysicTestnetTokens.cake],
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.CYSIC]]
 */
export const CUSTOM_BASES: {
  [chainId in ChainId]?: { [tokenAddress: string]: Token[] }
} = {}
