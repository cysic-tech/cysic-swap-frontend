import { ChainId } from '@pancakeswap/chains'
import { WCYS } from '@pancakeswap/sdk'

import { CYS_MAINNET, USDT_CYSIC } from './common'

export const cysicTokens = {
  wcys: WCYS[ChainId.CYSIC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: WCYS[ChainId.CYSIC],
  cake: CYS_MAINNET,
  usdt: USDT_CYSIC,
}
