import { Token } from '@pancakeswap/swap-sdk-core'
import { Address } from 'viem'

// /**
//  * Represents an ERC20 token with a unique address and some metadata.
//  */
export class ERC20Token extends Token {
  public constructor(
    chainId: number,
    address: Address,
    decimals: number,
    symbol: string,
    name?: string,
    projectLink?: string,
  ) {
    super(chainId, address, decimals, symbol, name, projectLink)
  }
}
