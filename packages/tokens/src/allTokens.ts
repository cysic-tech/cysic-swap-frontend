import { ChainId } from '@pancakeswap/chains'

import { cysicTokens } from './constants/cysic'
import { cysicTestnetTokens } from './constants/cysicTestnet'

export const allTokens = {
  [ChainId.CYSIC]: cysicTokens,
  [ChainId.CYSIC_TESTNET]: cysicTestnetTokens,
}
