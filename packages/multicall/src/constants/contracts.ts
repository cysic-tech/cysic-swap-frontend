import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

export const MULTICALL_ADDRESS: { [key in ChainId]?: Address } = {
  [ChainId.CYSIC]: '0x39eecaE833c944ebb94942Fa44CaE46e87a8Da17',

  // Testnets
  [ChainId.CYSIC_TESTNET]: '0xeeF6ff30cF5D5b8aBA0DE16A01d17A0697a275b5',
}

export const MULTICALL3_ADDRESSES: {
  [key in ChainId]: Address
} = {
  [ChainId.CYSIC]: cysicMetadata.MulticallV3 as `0x${string}`,
  [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.MulticallV3 as `0x${string}`,
}
