import { ChainId } from '@pancakeswap/chains'
import { WBNB } from '@pancakeswap/sdk'

import { CAKE_TESTNET } from './common'

export const cysicTestnetTokens = {
  wbnb: WBNB[ChainId.CYSIC_TESTNET],
  cake: CAKE_TESTNET,
}
