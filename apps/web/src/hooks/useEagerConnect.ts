import { isInBinance } from '@binance/w3w-utils'
import { useEffect } from 'react'
import { useConfig, useConnect } from 'wagmi'

import { binanceWeb3WalletConnector } from 'utils/wagmi'

const useEagerConnect = () => {
  const config = useConfig()
  const { connectAsync, connectors } = useConnect()
  useEffect(() => {
    if (isInBinance()) {
      connectAsync({ connector: binanceWeb3WalletConnector() })
    }
  }, [config, connectAsync, connectors])
}

export default useEagerConnect
