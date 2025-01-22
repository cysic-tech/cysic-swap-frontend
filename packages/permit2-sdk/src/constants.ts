import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

// @fixme convert to ChainId after all chains are updated
const PERMIT2_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CYSIC]: '0x',
  [ChainId.CYSIC_TESTNET]: '0x',
}

export const getPermit2Address = (chainId: ChainId | undefined): Address | undefined => {
  if (chainId === undefined) return PERMIT2_ADDRESSES[ChainId.CYSIC]
  if (!(chainId in PERMIT2_ADDRESSES)) return undefined
  return PERMIT2_ADDRESSES[chainId]
}

export const MaxUint48 = BigInt('0xffffffffffff')
export const MaxUint160 = BigInt('0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF')
export const MaxUint256 = BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const PERMIT_EXPIRATION = 2592000000 // 30 day
export const PERMIT_SIG_EXPIRATION = 1800000 // 30 min

export const InstantExpiration = BigInt('0')
