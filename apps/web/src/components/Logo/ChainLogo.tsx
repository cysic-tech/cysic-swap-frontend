import { cysicMetadata } from '@pancakeswap/ca-config'
import { ChainId } from '@pancakeswap/chains'
import { HelpIcon } from '@pancakeswap/uikit'
import { ASSET_CDN } from 'config/constants/endpoints'
import Image from 'next/image'
import { memo } from 'react'
import { isChainSupported } from 'utils/wagmi'

export const ChainLogo = memo(
  ({ chainId, width = 24, height = 24 }: { chainId?: number; width?: number; height?: number }) => {
    if (chainId && isChainSupported(chainId)) {
      if ([ChainId.CYSIC, ChainId.CYSIC_TESTNET].includes(+chainId)) {
        return (
          <Image
            alt={`chain-${chainId}`}
            style={{ maxHeight: `${height}px` }}
            src={cysicMetadata.logoUri}
            width={width}
            height={height}
            unoptimized
          />
        )
      }
      return (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={`${ASSET_CDN}/web/chains/${chainId}.png`}
          width={width}
          height={height}
          unoptimized
        />
      )
    }

    return <HelpIcon width={width} height={height} />
  },
)
