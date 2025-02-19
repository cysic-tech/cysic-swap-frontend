import { ChainId } from '@pancakeswap/chains'
import { Token } from '@pancakeswap/sdk'
import memoize from 'lodash/memoize'
import { safeGetAddressToLowercase } from 'utils'
import { isAddress } from 'viem'

const mapping = {
  [ChainId.CYSIC]: 'cysic',
  [ChainId.CYSIC_TESTNET]: 'cysic-testnet',
  [ChainId.BSC]: 'smartchain',
  [ChainId.ETHEREUM]: 'ethereum',
  [ChainId.POLYGON_ZKEVM]: 'polygonzkevm',
  [ChainId.ZKSYNC]: 'zksync',
  [ChainId.ARBITRUM_ONE]: 'arbitrum',
  [ChainId.LINEA]: 'linea',
}

// https://raw.githubusercontent.com/cysic-tech/token-list/master/${safeGetAddress(token.address)}.svg
const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && mapping[token.chainId] && isAddress(token.address)) {
      const githubUrl = `https://raw.githubusercontent.com/cysic-tech/token-list/master/assets/${
        mapping[token.chainId]
      }/${safeGetAddressToLowercase(token.address)}.svg`
      // const trustWalletUrl = `https://assets-cdn.trustwallet.com/blockchains/${
      //   mapping[token.chainId]
      // }/assets/${safeGetAddress(token.address)}/logo.png`

      return githubUrl
      // 返回包含两个 URL 的对象
      // return {
      //   github: githubUrl,
      //   trustWallet: trustWalletUrl,
      // }
    }
    return null
  },
  (t) => `${t?.chainId}#${t?.address}`,
)

export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId] && isAddress(address)) {
      const githubUrl = `https://raw.githubusercontent.com/cysic-tech/token-list/master/assets/${
        mapping[chainId]
      }/${safeGetAddressToLowercase(address)}.svg`
      // const trustWalletUrl = `https://assets-cdn.trustwallet.com/blockchains/${
      //   mapping[chainId]
      // }/assets/${safeGetAddress(address)}/logo.png`

      return githubUrl
      // 返回包含两个 URL 的对象
      // return {
      //   github: githubUrl,
      //   trustWallet: trustWalletUrl,
      // }
    }
    return null
  },
  (address, chainId) => `${chainId}#${address}`,
)

export default getTokenLogoURL
