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
  MasterChefV3: string
  SmartRouter: string
  SmartRouterHelper: string
  MixedRouteQuoterV1: string
  TokenValidator: string
  PancakeV3Factory: string
  PancakeV3PoolDeployer: string
  InitCodeHashAddress: string
  InitCodeHash: string
  PancakeV3LmPoolDeployer: string
  WNATIVE: string
  SwapRouter: string
  V3Migrator: string
  Quoter: string
  QuoterV2: string
  TickLens: string
  NonfungibleTokenPositionDescriptor: string
  NonfungiblePositionManager: string
  PancakeInterfaceMulticall: string

  // v2
  WBNB: string
  PancakeFactory: string
  PancakeRouter: string
  PancakeZapV1: string

  // WETH
  WETH: string

  // zero
  zeroAddress: string
  MulticallV3: string
}
