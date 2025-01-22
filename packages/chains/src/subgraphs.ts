/* eslint-disable @typescript-eslint/no-unused-vars */
import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from './chainId'

type SubgraphParams = {
  noderealApiKey?: string
  theGraphApiKey?: string
}

const publicSubgraphParams = {}

export const V3_SUBGRAPHS = getV3Subgraphs(publicSubgraphParams)

export const V2_SUBGRAPHS = getV2Subgraphs(publicSubgraphParams)

export const BLOCKS_SUBGRAPHS = getBlocksSubgraphs(publicSubgraphParams)

export const STABLESWAP_SUBGRAPHS = getStableSwapSubgraphs(publicSubgraphParams)

export function getStableSwapSubgraphs({ theGraphApiKey }: Pick<SubgraphParams, 'theGraphApiKey'> = {}) {
  return {} as const
}

export function getV3Subgraphs({ noderealApiKey, theGraphApiKey }: SubgraphParams) {
  return {
    [ChainId.CYSIC]: cysicTestnetMetadata.graph['exchange-v3'],
    [ChainId.CYSIC_TESTNET]: cysicMetadata.graph['exchange-v3'],
  } as const satisfies Record<ChainId, string | null>
}

export function getV2Subgraphs({ noderealApiKey, theGraphApiKey }: SubgraphParams) {
  return {
    [ChainId.CYSIC]: cysicTestnetMetadata.graph['exchange-v2'],
    [ChainId.CYSIC_TESTNET]: cysicMetadata.graph['exchange-v2'],
  }
}

export function getBlocksSubgraphs({ noderealApiKey }: SubgraphParams) {
  return {
    [ChainId.CYSIC]: cysicTestnetMetadata.graph.blocks,
    [ChainId.CYSIC_TESTNET]: cysicMetadata.graph.blocks,
  } as const
}
