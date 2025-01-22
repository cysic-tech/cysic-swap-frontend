import { ChainId } from '@pancakeswap/chains'
import { Address } from 'viem'

const UNIVERSAL_ROUTER_ADDRESSES: Record<ChainId, Address> = {
  [ChainId.CYSIC_TESTNET]: '0x',
  [ChainId.CYSIC]: '0x',
}

export const getUniversalRouterAddress = (chainId: ChainId): Address => {
  if (!(chainId in UNIVERSAL_ROUTER_ADDRESSES)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return UNIVERSAL_ROUTER_ADDRESSES[chainId]
}

export const CONTRACT_BALANCE = 2n ** 255n
export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

// export const OPENSEA_CONDUIT_SPENDER_ID = 0
// export const SUDOSWAP_SPENDER_ID = 1

export const SIGNATURE_LENGTH = 65
export const EIP_2098_SIGNATURE_LENGTH = 64
