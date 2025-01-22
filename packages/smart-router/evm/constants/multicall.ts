import { ChainId } from '@pancakeswap/chains'

import { BatchMulticallConfigs, ChainMap } from '../types'

const DEFAULT: BatchMulticallConfigs = {
  defaultConfig: {
    gasLimitPerCall: 1_000_000,
  },
  gasErrorFailureOverride: {
    gasLimitPerCall: 2_000_000,
  },
  successRateFailureOverrides: {
    gasLimitPerCall: 2_000_000,
  },
}

export const BATCH_MULTICALL_CONFIGS: ChainMap<BatchMulticallConfigs> = {
  [ChainId.CYSIC_TESTNET]: DEFAULT,
  [ChainId.CYSIC]: DEFAULT,
}
