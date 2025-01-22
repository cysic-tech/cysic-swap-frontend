import { ChainId } from '@pancakeswap/chains'
import { ERC20Token, Ether } from '@pancakeswap/sdk'
import * as Tokens from '@pancakeswap/tokens'
import { zeroAddress } from 'viem'

export { WETH9 } from '@pancakeswap/sdk'

const MockToken: Record<ChainId, ERC20Token> = (() => {
  const tokens: Record<ChainId, ERC20Token> = {} as Record<ChainId, ERC20Token>

  for (const chainId in ChainId) {
    if (!Number.isNaN(Number(chainId))) {
      const id = Number(chainId) as unknown as ChainId
      tokens[id] = new ERC20Token(id, zeroAddress, 18, 'MockToken')
    }
  }

  return tokens
})()

export const ETHER = {
  on(chainId: ChainId): Ether {
    return Ether.onChain(chainId)
  },
}

export const CAKE = {
  ...MockToken,
  ...Tokens.CAKE,
}

export const USDT = {
  ...Tokens.USDT,
}
export const USDC = {
  ...MockToken,
  ...Tokens.USDC,
}

export const BUSD = {
  ...MockToken,
  ...Tokens.BUSD,
}

export const WBNB = {
  ...MockToken,
  [ChainId.CYSIC]: Tokens.cysicTokens.wbnb,
  [ChainId.CYSIC_TESTNET]: Tokens.cysicTestnetTokens.wbnb,
}
