import { ChainId } from '@pancakeswap/chains'
import FarmsBscTestnetPriceHelper from './9000'
import FarmsBscPriceHelper from './9001'

export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.CYSIC:
      return FarmsBscPriceHelper
    case ChainId.CYSIC_TESTNET:
      return FarmsBscTestnetPriceHelper
    default:
      return []
  }
}
