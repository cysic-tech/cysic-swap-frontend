import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

export const WBETH: Record<number, Address> = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
}

export const SNBNB: Record<number, Address> = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
}

export const UNWRAPPED_ETH_ADDRESS: Address = '0x'
