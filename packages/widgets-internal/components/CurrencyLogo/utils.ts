import { ChainId } from "@pancakeswap/chains";
import { Currency, NATIVE, Token } from "@pancakeswap/sdk";
import { bscTokens, ethereumTokens } from "@pancakeswap/tokens";
import memoize from "lodash/memoize";
import { getAddress } from "viem";
import { CurrencyInfo } from "./types";

const mapping: { [key: number]: string } = {
  [ChainId.CYSIC]: "cysic",
  [ChainId.CYSIC_TESTNET]: "cysic-testnet",
  [ChainId.BSC]: "smartchain",
  [ChainId.ETHEREUM]: "ethereum",
  [ChainId.POLYGON_ZKEVM]: "polygonzkevm",
  [ChainId.ARBITRUM_ONE]: "arbitrum",
  [ChainId.ZKSYNC]: "zksync",
  [ChainId.BASE]: "base",
  [ChainId.LINEA]: "linea",
  [ChainId.OPBNB]: "opbnb",
};

// todo add cysic logo
export const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && mapping[token.chainId]) {
      return `https://raw.githubusercontent.com/cysic-tech/token-list/master/assets/${
        mapping[token.chainId]
      }/${getAddress(token.address).toLowerCase()}.svg`;
    }
    return null;
  },
  (t) => `${t?.chainId}#${t?.address}`
);

export const getTokenLogoURLByAddress = memoize(
  (address?: string, chainId?: number) => {
    if (address && chainId && mapping[chainId]) {
      return `https://raw.githubusercontent.com/cysic-tech/token-list/master/assets/${mapping[chainId]}/${getAddress(
        address
      ).toLowerCase()}.svg`;
    }
    return null;
  },
  (address, chainId) => `${chainId}#${address}`
);

export const chainName: { [key: number]: string } = {
  [ChainId.BSC]: "",
  [ChainId.ETHEREUM]: "eth",
  [ChainId.POLYGON_ZKEVM]: "polygon-zkevm",
  [ChainId.ARBITRUM_ONE]: "arbitrum",
  [ChainId.ZKSYNC]: "zksync",
  [ChainId.LINEA]: "linea",
  [ChainId.BASE]: "base",
  [ChainId.OPBNB]: "opbnb",
  [ChainId.CYSIC]: "cysic",
  [ChainId.CYSIC_TESTNET]: "cysic-testnet",
};

// TODO: move to utils or token-list
export const getTokenListBaseURL = (chainId: number) =>
  `https://raw.githubusercontent.com/cysic-tech/token-list/master/chain/${chainName[chainId]}`;

export const getTokenListTokenUrl = (token: Pick<Token, "chainId" | "address">) =>
  Object.keys(chainName).includes(String(token.chainId))
    ? `https://raw.githubusercontent.com/cysic-tech/token-list/master/assets/${
        chainName[token.chainId]
      }/${token.address?.toLowerCase()}.svg`
    : null;

const commonCurrencySymbols = [
  NATIVE[ChainId.CYSIC],
  NATIVE[ChainId.CYSIC_TESTNET],
  ethereumTokens.usdt,
  ethereumTokens.usdc,
  bscTokens.cake,
  bscTokens.usdv,
  ethereumTokens.wbtc,
  ethereumTokens.weth,
  NATIVE[ChainId.BSC],
  bscTokens.busd,
  ethereumTokens.dai,
].map(({ symbol }) => symbol);

export const getCommonCurrencyUrl = memoize(
  (currency?: Currency): string | undefined => getCommonCurrencyUrlBySymbol(currency?.symbol),
  (currency?: Currency) => `logoUrls#${currency?.chainId}#${currency?.symbol}`
);

export const getCommonCurrencyUrlBySymbol = memoize(
  (symbol?: string): string | undefined =>
    symbol && commonCurrencySymbols.includes(symbol)
      ? `https://raw.githubusercontent.com/cysic-tech/token-list/master/assets/${symbol.toLocaleLowerCase()}.svg`
      : undefined,
  (symbol?: string) => `logoUrls#symbol#${symbol}`
);

type GetLogoUrlsOptions = {
  useTrustWallet?: boolean;
};

export const getCurrencyLogoUrls = memoize(
  (currency: Currency | undefined, { useTrustWallet = true }: GetLogoUrlsOptions = {}): string[] => {
    const trustWalletLogo = getTokenLogoURL(currency?.wrapped);
    const logoUrl = currency ? getTokenListTokenUrl(currency.wrapped) : null;
    return [getCommonCurrencyUrl(currency), useTrustWallet ? trustWalletLogo : undefined, logoUrl].filter(
      (url): url is string => !!url
    );
  },
  (currency: Currency | undefined, options?: GetLogoUrlsOptions) =>
    `logoUrls#${currency?.chainId}#${currency?.wrapped?.address}#${options ? JSON.stringify(options) : ""}`
);

export const getCurrencyLogoUrlsByInfo = memoize(
  (currency: CurrencyInfo | undefined, { useTrustWallet = true }: GetLogoUrlsOptions = {}): string[] => {
    if (!currency) {
      return [];
    }
    const { chainId, address, symbol } = currency;
    const trustWalletLogo = getTokenLogoURLByAddress(address, chainId);
    const logoUrl = chainId && address ? getTokenListTokenUrl({ chainId, address }) : null;
    return [getCommonCurrencyUrlBySymbol(symbol), useTrustWallet ? trustWalletLogo : undefined, logoUrl].filter(
      (url): url is string => !!url
    );
  },
  (currency, options) =>
    `logoUrls#${currency?.chainId}#${currency?.symbol}#${currency?.address}#${options ? JSON.stringify(options) : ""}`
);
