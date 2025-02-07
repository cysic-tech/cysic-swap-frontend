import { ChainId } from '@pancakeswap/chains'
import { ComputedFarmConfigV3, FarmV3SupportedChainId } from '@pancakeswap/farms/src'

// Edge Case Farms

export const tradingRewardPairConfigChainMap: Record<FarmV3SupportedChainId, ComputedFarmConfigV3[]> = {
  [ChainId.CYSIC]: [],
  [ChainId.CYSIC_TESTNET]: [],
  // [ChainId.ETHEREUM]: [],
  // [ChainId.BSC]: [...tradingRewardBscV3Pair],
  // [ChainId.BSC_TESTNET]: [],
  // [ChainId.POLYGON_ZKEVM]: [...tradingRewardZkEvmV3Pair],
  // [ChainId.POLYGON_ZKEVM_TESTNET]: [],
  // [ChainId.ZKSYNC]: [...tradingRewardZkSyncV3Pair],
  // [ChainId.ZKSYNC_TESTNET]: [],
  // [ChainId.ARBITRUM_ONE]: [],
  // [ChainId.LINEA]: [...tradingRewardLineaV3Pair],
  // [ChainId.BASE]: [...tradingRewardBaseV3Pair],
  // [ChainId.OPBNB_TESTNET]: [],
  // [ChainId.OPBNB]: [],
}
