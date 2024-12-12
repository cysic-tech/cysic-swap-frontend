import { Button } from '@pancakeswap/uikit'
import { Wallet } from 'ethers'
import { useSetup } from 'hyperLiquid/hooks/useSetup'

const TestPage = () => {
  // For testnet
  const { address, info, exchange } = useSetup(false, true)
  // const [agentWallet, setAgentWallet] = useState<Wallet | null>(null)
  // const [extraAgentWallet, setExtraAgentWallet] = useState<Wallet | null>(null)

  const approveAgent = async (agentName?: string) => {
    try {
      const result = await exchange?.approveAgent(agentName)
      if (result?.status !== 'ok') {
        console.error('Approving agent failed:', result)
        return null
      }
      return result.agentKey // Assuming `approveAgent` returns `agentKey`
    } catch (error) {
      console.error('Error approving agent:', error)
      return null
    }
  }

  const placeOrder = async (agentExchange: any, coin: string, isBuy: boolean, size: number, price: number) => {
    try {
      const orderResult = await agentExchange.order(coin, isBuy, size, price, { limit: { tif: 'Gtc' } })
      console.log('Order Result:', orderResult)
      return orderResult
    } catch (error) {
      console.error('Error placing order:', error)
      return null
    }
  }

  const cancelOrder = async (agentExchange: any, coin: string, oid: string) => {
    try {
      const cancelResult = await agentExchange.cancel(coin, oid)
      console.log('Cancel Result:', cancelResult)
      return cancelResult
    } catch (error) {
      console.error('Error canceling order:', error)
      return null
    }
  }

  const testFlow = async () => {
    try {
      if (!exchange) {
        throw new Error('Exchange is not initialized.')
      }

      if (exchange.getAccountAddress() !== exchange.getWallet()?.address) {
        throw new Error('You should not create an agent using an agent.')
      }

      // Approve Agent
      const agentKey = await approveAgent()
      if (!agentKey) return

      const agentWallet = new Wallet(agentKey)

      console.log('Running with agent address:', agentWallet.address)
      // const agentExchange = new exchange.constructor(agentWallet, exchange.getBaseUrl(), undefined, address)

      // // Place Order
      // const orderResult = await placeOrder(agentExchange, 'ETH', true, 0.2, 1000)
      // if (orderResult?.status === 'ok') {
      //   const status = orderResult.response?.data?.statuses[0]
      //   if (status?.resting) {
      //     const oid = status.resting.oid
      //     console.log('Canceling order with original agent...')
      //     await cancelOrder(agentExchange, 'ETH', oid)
      //   }
      // }

      // // Approve Extra Named Agent
      // const extraAgentKey = await approveAgent('persist')
      // if (!extraAgentKey) return

      // const extraAgentWallet = new Wallet(extraAgentKey)
      // setExtraAgentWallet(extraAgentWallet)

      // console.log('Running with extra agent address:', extraAgentWallet.address)
      // const extraAgentExchange = new exchange.constructor(extraAgentWallet, exchange.getBaseUrl(), undefined, address)

      // console.log('Placing order with extra agent...')
      // const extraOrderResult = await placeOrder(extraAgentExchange, 'ETH', true, 0.2, 1000)
      // if (extraOrderResult?.status === 'ok') {
      //   const extraStatus = extraOrderResult.response?.data?.statuses[0]
      //   if (extraStatus?.resting) {
      //     const extraOid = extraStatus.resting.oid
      //     console.log('Canceling order with extra agent...')
      //     await cancelOrder(extraAgentExchange, 'ETH', extraOid)
      //   }
      // }
    } catch (error) {
      console.error('Test flow error:', error)
    }
  }

  return (
    <>
      <Button onClick={testFlow}>Run Test Flow</Button>
    </>
  )
}

export default TestPage
