import { Token } from '@pancakeswap/sdk'

interface WarningTokenList {
  [chainId: number]: {
    [key: string]: Token
  }
}

const SwapWarningTokens = <WarningTokenList>{}

export default SwapWarningTokens
