import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { Percent } from '@pancakeswap/swap-sdk-core'

import { ERC20Token } from './entities/erc20Token'

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const WETH9: any = {}

export const WBNB = {
  [ChainId.CYSIC]: new ERC20Token(
    ChainId.CYSIC,
    cysicMetadata.WBNB as `0x${string}`,
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org',
  ),
  [ChainId.CYSIC_TESTNET]: new ERC20Token(
    ChainId.CYSIC_TESTNET,
    cysicTestnetMetadata.WBNB as `0x${string}`,
    18,
    'WBNB',
    'Wrapped BNB',
    'https://www.binance.org',
  ),
}

export const WNATIVE = {
  [ChainId.CYSIC]: WBNB[ChainId.CYSIC],
  [ChainId.CYSIC_TESTNET]: WBNB[ChainId.CYSIC_TESTNET],
} satisfies Record<ChainId, ERC20Token>

const ETHER = { name: 'Ether', symbol: 'ETH', decimals: 18 } as const

const BNB = {
  name: 'Cysic Chain Native Token',
  symbol: 'CYS',
  decimals: 18,
} as const

export const NATIVE = {
  [ChainId.CYSIC]: BNB,
  [ChainId.CYSIC_TESTNET]: {
    name: 'Cysic Chain Native Token',
    symbol: 'CYS',
    decimals: 18,
  },
} satisfies Record<
  ChainId,
  {
    name: string
    symbol: string
    decimals: number
  }
>
