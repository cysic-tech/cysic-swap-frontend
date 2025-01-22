import { ChainId } from '@pancakeswap/chains'
import { WBNB } from '@pancakeswap/sdk'

import { CAKE_MAINNET } from './common'

export const cysicTokens = {
  wbnb: WBNB[ChainId.CYSIC],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: WBNB[ChainId.CYSIC],
  cake: CAKE_MAINNET,
}
