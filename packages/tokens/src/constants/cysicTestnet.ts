import { ChainId } from '@pancakeswap/chains'
import { WCYS } from '@pancakeswap/sdk'

import { CYS_TESTNET, USDT_CYSIC_TESTNET } from './common'

export const cysicTestnetTokens = {
  wcys: WCYS[ChainId.CYSIC_TESTNET],
  // bnb here points to the wbnb contract. Wherever the currency BNB is required, conditional checks for the symbol 'BNB' can be used
  bnb: WCYS[ChainId.CYSIC_TESTNET],
  cake: CYS_TESTNET,
  usdt: USDT_CYSIC_TESTNET,
}
