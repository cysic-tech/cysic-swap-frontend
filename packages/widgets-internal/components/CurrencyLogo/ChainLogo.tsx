import { cysicMetadata } from "@pancakeswap/ca-config";
import { ChainId as _ChainId } from "@pancakeswap/chains";
import { Box, HelpIcon } from "@pancakeswap/uikit";
import Image from "next/image";
import { memo } from "react";
import { SpaceProps } from "styled-system";

export const ChainLogo = memo(
  ({
    chainId,
    width = 24,
    height = 24,
    ...props
  }: { chainId?: number; width?: number; height?: number } & SpaceProps) => {
    const icon = chainId ? (
      [_ChainId.CYSIC, _ChainId.CYSIC_TESTNET].includes(+chainId) ? (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={cysicMetadata.logoUri}
          width={width}
          height={height}
          unoptimized
        />
      ) : (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={`https://assets.pancakeswap.finance/web/chains/${chainId}.png`}
          width={width}
          height={height}
          unoptimized
        />
      )
    ) : (
      <HelpIcon width={width} height={height} />
    );
    return <Box {...props}>{icon}</Box>;
  }
);
