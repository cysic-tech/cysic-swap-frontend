import { ChainId } from '@pancakeswap/chains'
import { CHAINS } from 'config/chains'
import { useActiveChainId } from 'hooks/useActiveChainId'
import { useMemo } from 'react'

export const MAINNET_CHAINS = CHAINS.filter((chain) => {
  if (process.env.NODE_ENV === 'production' && 'testnet' in chain && chain.testnet) {
    return false
  }
  return [ChainId.CYSIC, ChainId.CYSIC_TESTNET].includes(chain.id)
})

export const useAllChainIds = () => useMemo(() => MAINNET_CHAINS.map((chain) => chain.id), [])

export const useOrderChainIds = () => {
  const allChainIds = useAllChainIds()
  const { chainId: activeChainId } = useActiveChainId()
  const othersChains = useMemo(() => allChainIds.filter((id) => id !== activeChainId), [allChainIds, activeChainId])
  const orderedChainIds = useMemo(() => [activeChainId, ...othersChains], [activeChainId, othersChains])
  return {
    activeChainId,
    othersChains,
    orderedChainIds,
  }
}
