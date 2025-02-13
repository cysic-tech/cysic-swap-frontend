import { ChainId, basicChainId } from '@pancakeswap/chains'
import { getSourceChain } from '@pancakeswap/ifos'
import { useMemo } from 'react'

// By deafult source chain is the first chain that supports native ifo
export function useIfoSourceChain(chainId?: ChainId) {
  return useMemo(() => getSourceChain(chainId) || basicChainId, [chainId])
}
