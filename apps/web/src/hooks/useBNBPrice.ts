import { BIG_ZERO } from '@pancakeswap/utils/bigNumber'
import { useQuery } from '@tanstack/react-query'
import BigNumber from 'bignumber.js'
import { FAST_INTERVAL } from 'config/constants'
import { formatUnits } from 'viem'

// for migration to bignumber.js to avoid breaking changes
export const useBNBPrice = ({ enabled = true } = {}) => {
  const { data } = useQuery<BigNumber, Error>({
    queryKey: ['bnbPrice'],
    queryFn: async () => new BigNumber(await getBNBPriceFromOracle()),
    staleTime: FAST_INTERVAL,
    refetchInterval: FAST_INTERVAL,
    enabled,
  })
  return data ?? BIG_ZERO
}

export const getBNBPriceFromOracle = async () => {
  const data = BigInt(997e15) // 0.997

  return formatUnits(data, 8)
}
