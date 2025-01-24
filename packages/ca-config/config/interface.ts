export interface chainMetadata {
  chainId: number
  graph: {
    blocks: string
    'exchange-cake-pairs': string
    'exchange-v2': string
    'exchange-v3': string
    pairs: string
    'user-position-v3': string
  }
  network: string
  // v3
  MasterChefV3: `0x${string}`
  SmartRouter: `0x${string}`
  SmartRouterHelper: `0x${string}`
  MixedRouteQuoterV1: `0x${string}`
  TokenValidator: `0x${string}`
  PancakeV3Factory: `0x${string}`
  PancakeV3PoolDeployer: `0x${string}`
  InitCodeHashAddress: `0x${string}`
  InitCodeHash: `0x${string}`
  PancakeV3LmPoolDeployer: `0x${string}`
  WNATIVE: `0x${string}`
  SwapRouter: `0x${string}`
  V3Migrator: `0x${string}`
  Quoter: `0x${string}`
  QuoterV2: `0x${string}`
  TickLens: `0x${string}`
  NonfungibleTokenPositionDescriptor: `0x${string}`
  NonfungiblePositionManager: `0x${string}`
  PancakeInterfaceMulticall: `0x${string}`

  // v2
  WBNB: `0x${string}`
  PancakeFactory: `0x${string}`
  PancakeRouter: `0x${string}`
  PancakeZapV1: `0x${string}`

  // WETH
  WETH: `0x${string}`

  // zero
  zeroAddress: `0x${string}`
  MulticallV3: `0x${string}`
}
