import { getWagmiConnectorV2 } from '@binance/w3w-wagmi-connector-v2'
import { CHAINS } from 'config/chains'
import { PUBLIC_NODES } from 'config/nodes'
import memoize from 'lodash/memoize'
import { Transport } from 'viem'
import { createConfig, fallback, http } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { coinbaseWallet, injected, safe, walletConnect } from 'wagmi/connectors'
import { CLIENT_CONFIG, publicClient } from './viem'

export const chains = CHAINS

export const injectedConnector = injected({
  shimDisconnect: false,
})

export const coinbaseConnector = coinbaseWallet({
  appName: 'CysicSwap',
  appLogoUrl: 'https://cysic.xyz/assets/logo.png',
})

export const walletConnectConnector = walletConnect({
  // ignore the error in test environment
  // Error: To use QR modal, please install @walletconnect/modal package
  showQrModal: process.env.NODE_ENV !== 'test',
  projectId: '6ab5ecec04d7664dc468ef3be076b842',
})

export const walletConnectNoQrCodeConnector = walletConnect({
  showQrModal: false,
  projectId: '6ab5ecec04d7664dc468ef3be076b842',
})

export const metaMaskConnector = injected({ target: 'metaMask', shimDisconnect: false })
export const trustConnector = injected({ target: 'trust', shimDisconnect: false })

export const binanceWeb3WalletConnector = getWagmiConnectorV2()

export const noopStorage = {
  getItem: (_key: any) => '',
  setItem: (_key: any, _value: any) => {},
  removeItem: (_key: any) => {},
}

const PUBLIC_MAINNET = 'https://ethereum.publicnode.com'

export const transports = chains.reduce((ts, chain) => {
  let httpStrings: string[] | readonly string[] = []

  if (process.env.NODE_ENV === 'test' && chain.id === mainnet.id) {
    httpStrings = [PUBLIC_MAINNET]
  } else {
    httpStrings = PUBLIC_NODES[chain.id] ? PUBLIC_NODES[chain.id] : []
  }

  if (ts) {
    return {
      ...ts,
      [chain.id]: fallback(httpStrings.map((t: any) => http(t))),
    }
  }

  return {
    [chain.id]: fallback(httpStrings.map((t: any) => http(t))),
  }
}, {} as Record<number, Transport>)

export function createWagmiConfig() {
  return createConfig({
    chains,
    ssr: true,
    syncConnectedChain: true,
    transports,
    ...CLIENT_CONFIG,

    connectors: [
      metaMaskConnector,
      injectedConnector,
      safe(),
      coinbaseConnector,
      walletConnectConnector,
      trustConnector,
      binanceWeb3WalletConnector(),
    ],
  })
}

export const CHAIN_IDS = chains.map((c) => c.id)

export const isChainSupported = memoize((chainId: number) => (CHAIN_IDS as number[]).includes(chainId))
export const isChainTestnet = memoize((chainId: number) => {
  const found = chains.find((c) => c.id === chainId)
  return found ? 'testnet' in found : false
})

export { publicClient }
