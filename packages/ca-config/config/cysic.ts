import { defineChain } from 'viem'
import { chainMetadata } from './interface'

const dexName = 'cysicswap'
const cysicMetadata: chainMetadata = {
  chainId: 9001,
  graph: {
    blocks: 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/blocks',
    'exchange-cake-pairs': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/exchange-cake-pairs',
    'exchange-v2': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/exchange-v2',
    'exchange-v3': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/exchange-v3',
    pairs: 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/pairs',
    'user-position-v3': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/user-position-v3',
  },
  network: 'cysic',
  // v3
  MasterChefV3: '0xa83189171653573d1862eef403929617C11183E9',
  SmartRouter: '0x395eCBa6E575bAaC6C3c9082d3a47F76C640E365',
  SmartRouterHelper: '0x497Bf31F9084AeE2639310BA2CF921e788a01506',
  MixedRouteQuoterV1: '0x52CBd72228A97FB3eff22fe8C973CE19525CEAb8',
  TokenValidator: '0xbFFFf25D0cD674757852b0c21E67b3Ec1be09156',
  PancakeV3Factory: '0x1f661D87f0FC6c60EDD3BC130Cea811aa26c1a88',
  PancakeV3PoolDeployer: '0xc84D76cEa9448793F6f7646F9C706974c200c2B5',
  InitCodeHashAddress: '0x925C8F664E4d700658f1f8166d32EFfabb12F0C8',
  InitCodeHash: '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2',
  PancakeV3LmPoolDeployer: '0x1AE14fe546DA5831a2336530936CA2e33d411f31',
  WNATIVE: '0x0261d2F0199D060540C97DC13B5420d5c91A8fe9',
  SwapRouter: '0x99c366d3748d0A5fc52d60e1e1864050cEe78c58',
  V3Migrator: '0x97983e8EB74620371572BD34A7158539A05F1b73',
  Quoter: '0x0e6466BE0a9B1b324931cabaC1d21b4a1f9e522d',
  QuoterV2: '0x6470aa8462dA4b17c39910C64f2D27D6537E7462',
  TickLens: '0x38622A35C4b3c18a4c0e6710569af042B8E3d4C1',
  NonfungibleTokenPositionDescriptor: '0xa0f38b0e1f4580Ec2e5Ed049296A6A7a642be755',
  NonfungiblePositionManager: '0xdf5B0565769EadF40328f3d5dbD4f38a9b941A53',
  PancakeInterfaceMulticall: '0xe81FB7a8a87Ea12c05ee718cD5025c400EbC22C6',
  PancakeInterfaceMulticallV2: '0x12c89f85000213D4ac3E1b4Baa56D37c39758d8A',
  Permit2: '0x1080dFA879DEbA5C2c924a2475986B23b497B667',
  UniversalRouter: '0x4305a4b18771db008E7BAB6dEdE3c6Bd928Fb4d4',
  // v2
  WBNB: '0x0261d2F0199D060540C97DC13B5420d5c91A8fe9',
  PancakeFactory: '0x43d46c17d5Ab670C388a6cb6eb1Cf287730F6E46',
  PancakeRouter: '0x423AcE92C608cA4538585329DA3102c3901b9cDD',
  PancakeZapV1: '0x6Bd19C2499bBacdA3D141bDc75045CB0ca76aAe8',
  InitCodeHashV2: '0xa5934690703a592a07e841ca29d5e5c79b5e22ed4749057bb216dc31100be1c0',
  // WETH
  WETH: '0x',

  // zero
  zeroAddress: '0x0000000000000000000000000000000000000000',
  MulticallV3: '0x2c92F7945ecba1bB3179F7486187FDaCcF7a05B5',
  USDT: '0x1D94C15436EB1281b013e3C40De6d36f86b8fC2A',
  logoUri: 'https://cysic.xyz/assets/Symbol/Cysic%20Symbol.svg',

  usdtWnativeLp: '0xfF42396Ef67f2925b209c94E5B40BdaFf62C69d3',
}

const cysicTestnetMetadata: chainMetadata = {
  chainId: 9000,
  // https://dev-swap.prover.xyz/subgraphs/name/cysicswap/blocks/graphql?
  graph: {
    blocks: 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/blocks',
    'exchange-cake-pairs': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/exchange-cake-pairs',
    'exchange-v2': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/exchange-v2',
    'exchange-v3': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/exchange-v3',
    pairs: 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/pairs',
    'user-position-v3': 'https://dev-swap.prover.xyz/subgraphs/name/cysicswap/user-position-v3',
  },
  network: 'cysic-dev',
  // v3
  MasterChefV3: '0xa83189171653573d1862eef403929617C11183E9',
  SmartRouter: '0x395eCBa6E575bAaC6C3c9082d3a47F76C640E365',
  SmartRouterHelper: '0x497Bf31F9084AeE2639310BA2CF921e788a01506',
  MixedRouteQuoterV1: '0x52CBd72228A97FB3eff22fe8C973CE19525CEAb8',
  TokenValidator: '0xbFFFf25D0cD674757852b0c21E67b3Ec1be09156',
  PancakeV3Factory: '0x1f661D87f0FC6c60EDD3BC130Cea811aa26c1a88',
  PancakeV3PoolDeployer: '0xc84D76cEa9448793F6f7646F9C706974c200c2B5',
  InitCodeHashAddress: '0x925C8F664E4d700658f1f8166d32EFfabb12F0C8',
  InitCodeHash: '0x6ce8eb472fa82df5469c6ab6d485f17c3ad13c8cd7af59b3d4a8026c5ce0f7e2',
  PancakeV3LmPoolDeployer: '0x1AE14fe546DA5831a2336530936CA2e33d411f31',
  WNATIVE: '0x0261d2F0199D060540C97DC13B5420d5c91A8fe9',
  SwapRouter: '0x99c366d3748d0A5fc52d60e1e1864050cEe78c58',
  V3Migrator: '0x97983e8EB74620371572BD34A7158539A05F1b73',
  Quoter: '0x0e6466BE0a9B1b324931cabaC1d21b4a1f9e522d',
  QuoterV2: '0x6470aa8462dA4b17c39910C64f2D27D6537E7462',
  TickLens: '0x38622A35C4b3c18a4c0e6710569af042B8E3d4C1',
  NonfungibleTokenPositionDescriptor: '0xa0f38b0e1f4580Ec2e5Ed049296A6A7a642be755',
  NonfungiblePositionManager: '0xdf5B0565769EadF40328f3d5dbD4f38a9b941A53',
  PancakeInterfaceMulticall: '0xe81FB7a8a87Ea12c05ee718cD5025c400EbC22C6',
  PancakeInterfaceMulticallV2: '0x12c89f85000213D4ac3E1b4Baa56D37c39758d8A',
  Permit2: '0x1080dFA879DEbA5C2c924a2475986B23b497B667',
  UniversalRouter: '0x4305a4b18771db008E7BAB6dEdE3c6Bd928Fb4d4',
  // v2
  WBNB: '0x0261d2F0199D060540C97DC13B5420d5c91A8fe9',
  PancakeFactory: '0x43d46c17d5Ab670C388a6cb6eb1Cf287730F6E46',
  PancakeRouter: '0x423AcE92C608cA4538585329DA3102c3901b9cDD',
  PancakeZapV1: '0x6Bd19C2499bBacdA3D141bDc75045CB0ca76aAe8',
  InitCodeHashV2: '0xa5934690703a592a07e841ca29d5e5c79b5e22ed4749057bb216dc31100be1c0',

  // WETH
  WETH: '0x',

  // zero
  zeroAddress: '0x0000000000000000000000000000000000000000',
  MulticallV3: '0x2c92F7945ecba1bB3179F7486187FDaCcF7a05B5',
  USDT: '0x1D94C15436EB1281b013e3C40De6d36f86b8fC2A',
  logoUri: 'https://cysic.xyz/assets/Symbol/Cysic%20Symbol.svg',
  usdtWnativeLp: '0xfF42396Ef67f2925b209c94E5B40BdaFf62C69d3',
}

const cysicTestnetRpc: string = 'https://evm-dev.prover.xyz'
const cysicRpc: string = 'https://evm-dev.prover.xyz'

const cysicTestnet = defineChain({
  id: 9_000,
  name: 'Cysic Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'CYS',
    symbol: 'CYS',
  },
  rpcUrls: {
    default: { http: [cysicTestnetRpc] },
  },
  blockExplorers: {
    default: {
      name: 'Cysic Testnet Scan',
      url: 'https://cys-dev.prover.xyz/',
    },
  },
  testnet: true,
  contracts: {
    multicall3: {
      address: '0x2c92F7945ecba1bB3179F7486187FDaCcF7a05B5',
      blockCreated: 457614,
    },
  },
})

const cysic = defineChain({
  id: 9_001,
  name: 'Cysic',
  nativeCurrency: {
    decimals: 18,
    name: 'CYS',
    symbol: 'CYS',
  },
  rpcUrls: {
    default: { http: [cysicRpc] },
  },
  blockExplorers: {
    default: {
      name: 'Cysic Scan',
      url: 'https://cys-dev.prover.xyz/',
    },
  },
  testnet: false,
  contracts: {
    multicall3: {
      address: '0x2c92F7945ecba1bB3179F7486187FDaCcF7a05B5',
      blockCreated: 457614,
    },
  },
})

export { cysic, cysicMetadata, cysicRpc, cysicTestnet, cysicTestnetMetadata, cysicTestnetRpc, dexName }
