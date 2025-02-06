import { createCustomGraphql, cysic, cysicRpc, cysicTestnet, cysicTestnetRpc } from '@pancakeswap/ca-config'
import { ChainId, getV3Subgraphs } from '@pancakeswap/chains'
import { OnChainProvider, SubgraphProvider } from '@pancakeswap/smart-router'
import { GraphQLClient } from 'graphql-request'
import { createPublicClient, http } from 'viem'
import { bsc, bscTestnet, goerli, mainnet } from 'viem/chains'

import { SupportedChainId } from './constants'

const requireCheck = [ETH_NODE, GOERLI_NODE, BSC_NODE, BSC_TESTNET_NODE, NODE_REAL_SUBGRAPH_API_KEY, THE_GRAPH_API_KEY]
requireCheck.forEach((node) => {
  if (!node) {
    throw new Error('Missing env var')
  }
})

const V3_SUBGRAPHS = getV3Subgraphs({
  noderealApiKey: NODE_REAL_SUBGRAPH_API_KEY,
  theGraphApiKey: THE_GRAPH_API_KEY,
})

const mainnetClient = createPublicClient({
  chain: mainnet,
  transport: http(ETH_NODE),
})

const bscClient = createPublicClient({
  chain: bsc,
  transport: http(BSC_NODE),
})

const bscTestnetClient = createPublicClient({
  chain: bscTestnet,
  transport: http(BSC_TESTNET_NODE),
})

const goerliClient = createPublicClient({
  chain: goerli,
  transport: http(GOERLI_NODE),
})

const cysicClient = createPublicClient({
  chain: cysic,
  transport: http(cysicRpc),
})

const cysicTestnetClient = createPublicClient({
  chain: cysicTestnet,
  transport: http(cysicTestnetRpc),
})

// @ts-ignore
export const viemProviders: OnChainProvider = ({ chainId }: { chainId?: ChainId }) => {
  switch (chainId) {
    case ChainId.CYSIC:
      return cysicClient
    case ChainId.CYSIC_TESTNET:
      return cysicTestnetClient
    case ChainId.ETHEREUM:
      return mainnetClient
    case ChainId.BSC:
      return bscClient
    case ChainId.BSC_TESTNET:
      return bscTestnetClient
    case ChainId.GOERLI:
      return goerliClient
    default:
      return bscClient
  }
}

export const v3SubgraphClients: Record<SupportedChainId, GraphQLClient> = {
  [ChainId.CYSIC]: createCustomGraphql(new GraphQLClient(V3_SUBGRAPHS[ChainId.CYSIC], { fetch })),
  [ChainId.CYSIC_TESTNET]: createCustomGraphql(new GraphQLClient(V3_SUBGRAPHS[ChainId.CYSIC_TESTNET], { fetch })),
  [ChainId.BSC]: new GraphQLClient(V3_SUBGRAPHS[ChainId.BSC], { fetch }),
  [ChainId.BSC_TESTNET]: new GraphQLClient(V3_SUBGRAPHS[ChainId.BSC_TESTNET], { fetch }),
} as const

export const v3SubgraphProvider: SubgraphProvider = ({ chainId = ChainId.CYSIC }: { chainId?: ChainId }) => {
  return v3SubgraphClients[chainId as SupportedChainId] || v3SubgraphClients[ChainId.CYSIC]
}
