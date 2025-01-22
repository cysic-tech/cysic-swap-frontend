import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { ERC20Token } from '@pancakeswap/sdk'

export const CAKE_MAINNET = new ERC20Token(
  ChainId.CYSIC,
  cysicMetadata.WBNB as `0x${string}`,
  18,
  'CYS',
  'Cysic Token',
  'https://cysic.xyz/',
)

export const CAKE_TESTNET = new ERC20Token(
  ChainId.CYSIC_TESTNET,
  cysicTestnetMetadata.WBNB as `0x${string}`,
  18,
  'CYS',
  'Cysic Token',
  'https://cysic.xyz/',
)

// export const USDC_BSC = new ERC20Token(
//   ChainId.BSC,
//   '0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d',
//   18,
//   'USDC',
//   'Binance-Peg USD Coin',
//   'https://www.centre.io/usdc',
// )

// export const USDC_TESTNET = new ERC20Token(
//   ChainId.BSC_TESTNET,
//   '0x64544969ed7EBf5f083679233325356EbE738930',
//   18,
//   'USDC',
//   'Binance-Peg USD Coin',
//   'https://www.centre.io/usdc',
// )

export const BUSD = {}

export const CAKE = {
  [ChainId.CYSIC]: CAKE_MAINNET,
  [ChainId.CYSIC_TESTNET]: CAKE_TESTNET,
}

export const USDC = {}

export const USDT = {}

export const DAI = {}

export const STABLE_COIN = {}
