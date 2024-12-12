import { useQuery } from '@tanstack/react-query'
import { Wallet } from 'ethers'
import { zeroAddress } from 'viem'
import { useAccount } from 'wagmi'
import { MAINNET_API_URL, TESTNET_API_URL } from '../constants'
import { Exchange } from '../exchange'
import { Info } from '../info'

interface SetupResult {
  address: string
  info: Info
  exchange: Exchange
}

export function useSetup(isMainnet: boolean = true, skipWs: boolean = false) {
  const { address: walletAddress } = useAccount()
  const baseUrl = isMainnet ? MAINNET_API_URL : TESTNET_API_URL

  const defaultResult: SetupResult = {
    address: zeroAddress,
    info: new Info(baseUrl, skipWs),
    exchange: new Exchange('', baseUrl),
  }

  const query = useQuery({
    queryKey: ['setup', walletAddress],
    queryFn: async () => {
      try {
        const accountAddress = process.env.NEXT_PUBLIC_ACCOUNT_ADDRESS || ''
        const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY || ''

        if (!secretKey) {
          throw new Error('Secret key not provided in environment variables.')
        }

        const account = new Wallet(secretKey)
        const actualAddress = account.address || accountAddress || walletAddress

        if (!actualAddress) {
          throw new Error('No wallet address found.')
        }

        const info = new Info(baseUrl, skipWs)
        const userState = await info.userState(actualAddress)
        const spotUserState = await info.spotUserState(actualAddress)

        const { marginSummary } = userState
        if (parseFloat(marginSummary.accountValue) === 0 && spotUserState.balances.length === 0) {
          console.error('Not running the example because the provided account has no equity.')
          const url = info.getBaseUrl().split('.', 2).join('.')
          const errorString = `No accountValue:\nIf you think this is a mistake, make sure that ${actualAddress} has a balance on ${url}.\nIf address shown is your API wallet address, update the config to specify the address of your account, not the address of the API wallet.`
          throw new Error(errorString)
        }

        const exchange = new Exchange(account, baseUrl, undefined, undefined, actualAddress)

        return {
          address: actualAddress,
          info,
          exchange,
        }
      } catch (error) {
        console.error(error)
        return defaultResult
      }
    },
    enabled: Boolean(walletAddress),
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // refetchInterval: 10000,
  })

  if (!query.isFetched && !walletAddress) {
    return defaultResult
  }

  return query.data || defaultResult
}
