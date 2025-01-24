import { cysic, cysicTestnet } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'

export const SERVER_NODES = {
  [ChainId.CYSIC]: cysic.rpcUrls.default.http,
  [ChainId.CYSIC_TESTNET]: cysicTestnet.rpcUrls.default.http,
} satisfies Record<ChainId, readonly string[]>

export const PUBLIC_NODES: Record<ChainId, string[] | readonly string[]> = {
  [ChainId.CYSIC]: cysic.rpcUrls.default.http,
  [ChainId.CYSIC_TESTNET]: cysicTestnet.rpcUrls.default.http,
} satisfies Record<ChainId, readonly string[]>
