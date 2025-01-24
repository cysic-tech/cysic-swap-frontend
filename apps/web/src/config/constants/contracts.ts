import { cysicMetadata, cysicTestnetMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { masterChefV3Addresses } from '@pancakeswap/farms'
import { masterChefAddresses } from '@pancakeswap/farms/src/const'
import { V3_QUOTER_ADDRESSES } from '@pancakeswap/smart-router'
import { DEPLOYER_ADDRESSES } from '@pancakeswap/v3-sdk'

export default {
  masterChef: masterChefAddresses,
  masterChefV3: masterChefV3Addresses,
  masterChefV1: {
    [ChainId.CYSIC_TESTNET]: '0x',
    [ChainId.CYSIC]: '0x',
  },
  // sousChef: {
  //   [ChainId.CYSIC_TESTNET]: '0x',
  //   [ChainId.CYSIC]: '0x',
  // },
  // lotteryV2: {
  //   [ChainId.CYSIC_TESTNET]: '0x',
  //   [ChainId.CYSIC]: '0x',
  // },
  multiCall: {
    [ChainId.CYSIC]: cysicMetadata.MulticallV3,
    [ChainId.CYSIC_TESTNET]: cysicTestnetMetadata.MulticallV3,
  },
  // pancakeProfile: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // pancakeProfileProxy: {},
  // pancakeBunnies: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bunnyFactory: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // claimRefund: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // pointCenterIfo: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bunnySpecial: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // tradingCompetitionEaster: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // tradingCompetitionFanToken: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // tradingCompetitionMobox: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // tradingCompetitionMoD: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // easterNft: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // cakeVault: CAKE_VAULT,
  // cakeFlexibleSideVault: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // predictionsV1: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bunnySpecialCakeVault: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bunnySpecialPrediction: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bunnySpecialLottery: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bunnySpecialXmas: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // farmAuction: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // nftMarket: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // nftSale: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // pancakeSquad: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // potteryDraw: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // zap: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  stableSwapNativeHelper: {
    [ChainId.CYSIC]: '0x',
    [ChainId.CYSIC_TESTNET]: '0x',
  },
  // iCake: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bCakeFarmBooster: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // bCakeFarmBoosterProxyFactory: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // crossFarmingReceiver: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // mmLinkedPool: {
  //   [ChainId.CYSIC]: '0x',
  // },
  // tradingReward: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // nftPositionManager: NFT_POSITION_MANAGER_ADDRESSES as any,
  v3PoolDeployer: DEPLOYER_ADDRESSES as any,
  v3Migrator: {
    [ChainId.CYSIC]: '0x',
    [ChainId.CYSIC_TESTNET]: '0x',
  },
  quoter: V3_QUOTER_ADDRESSES,
  // v3Airdrop: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // affiliateProgram: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // tradingRewardTopTrades: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // vCake: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // revenueSharingPool: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // anniversaryAchievement: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // fixedStaking: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // veCake: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // pancakeVeSenderV2: {
  //   [ChainId.CYSIC]: '0x',
  // },
  // gaugesVoting: GAUGES_ADDRESS,
  // gaugesVotingCalc: GAUGES_CALC_ADDRESS,
  // revenueSharingVeCake: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // revenueSharingCakePool: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // revenueSharingPoolGateway: {
  //   [ChainId.CYSIC]: '0x',
  //   [ChainId.CYSIC_TESTNET]: '0x',
  // },
  // zkSyncAirDrop: {},
} as const satisfies Record<string, Record<number, `0x${string}`>>
