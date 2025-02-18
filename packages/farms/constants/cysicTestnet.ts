import { getAddress } from 'viem'
import { FarmConfigV3, SerializedFarmConfig } from '..'
import { defineFarmV3Configs } from '../src/defineFarmV3Configs'

// https://github.com/pancakeswap/pancake-frontend/blob/cb9726c789d3948aff301c7692eff9552368e633/packages/farms/constants/bsc.ts#L8
const v3TopFixedLps: FarmConfigV3[] = []

export const farmsV3 = defineFarmV3Configs([
  ...v3TopFixedLps,
  // new lps should follow after the top fixed lps
  // latest first
])

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  //   {
  //     pid: 2,
  //     v1pid: 251,
  //     lpSymbol: 'CAKE-BNB LP',
  //     lpAddress: CAKE_BNB_LP_MAINNET,
  //     token: bscTokens.cake,
  //     quoteToken: bscTokens.wbnb,
  //     bCakeWrapperAddress: '0x9669218e7ffACE40D78FF09C78aEA5F4DEb9aD4D',
  //     boosted: true,
  //   },
  //   {
  //     pid: 0,
  //     v1pid: 0,
  //     lpSymbol: 'WCYS',
  //     lpAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
  //     token: cysicTokens.syrup,
  //     quoteToken: bscTokens.wbnb,
  //   },
].map(
  (p: any) =>
    ({
      ...(p || {}),
      token: p?.token?.serialize,
      quoteToken: p?.quoteToken?.serialize,
      lpAddress: getAddress(p?.lpAddress),
    } as SerializedFarmConfig),
)

export default farms
