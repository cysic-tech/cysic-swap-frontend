import { UniversalFarmConfig } from '../types'

const pinnedFarmConfig: UniversalFarmConfig[] = []

export const bscTestnetFarmConfig: UniversalFarmConfig[] = [
  ...pinnedFarmConfig,
  // {
  //   pid: 1,
  //   chainId: ChainId.CYSIC_TESTNET,
  //   protocol: Protocol.V3,
  //   lpAddress: '0x5147173E452AE4dd23dcEe7BaAaaAB7318F16F6B',
  //   token0: bscTestnetTokens.usdt,
  //   token1: bscTestnetTokens.wbnb,
  //   feeAmount: FeeAmount.MEDIUM,
  // },
]

export default bscTestnetFarmConfig
