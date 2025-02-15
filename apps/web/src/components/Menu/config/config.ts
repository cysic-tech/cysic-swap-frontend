import { ContextApi } from '@pancakeswap/localization'
import { SUPPORTED_CHAIN_IDS as POSITION_MANAGERS_SUPPORTED_CHAINS } from '@pancakeswap/position-managers'
import {
  BridgeIcon,
  DropdownMenuItems,
  DropdownMenuItemType,
  EarnFillIcon,
  EarnIcon,
  MenuItemsType,
  SwapFillIcon,
  SwapIcon,
} from '@pancakeswap/uikit'
import { SUPPORT_FARMS } from 'config/constants/supportChains'

export type ConfigMenuDropDownItemsType = DropdownMenuItems & {
  hideSubNav?: boolean
  overrideSubNavItems?: DropdownMenuItems['items']
  matchHrefs?: string[]
}
export type ConfigMenuItemsType = Omit<MenuItemsType, 'items'> & {
  hideSubNav?: boolean
  image?: string
  items?: ConfigMenuDropDownItemsType[]
  overrideSubNavItems?: ConfigMenuDropDownItemsType[]
}

export const addMenuItemSupported = (item, chainId) => {
  if (!chainId || !item.supportChainIds) {
    return item
  }
  if (item.supportChainIds?.includes(chainId)) {
    return item
  }
  return {
    ...item,
    disabled: true,
  }
}

const config: (
  t: ContextApi['t'],
  isDark: boolean,
  languageCode?: string,
  chainId?: number,
) => ConfigMenuItemsType[] = (t, isDark, languageCode, chainId) =>
  [
    {
      label: t('Trade'),
      icon: SwapIcon,
      fillIcon: SwapFillIcon,
      href: '/',
      hideSubNav: true,
    },
    {
      label: t('Earn'),
      href: '/liquidity/positions',
      icon: EarnIcon,
      fillIcon: EarnFillIcon,
      image: '/images/decorations/pe2.png',
      supportChainIds: SUPPORT_FARMS,
      overrideSubNavItems: [
        {
          label: t('Farm / Liquidity'),
          href: '/liquidity/positions',
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Position Manager'),
          href: '/position-managers',
          supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
      items: [
        {
          label: t('Farm / Liquidity'),
          href: '/liquidity/positions',
          matchHrefs: ['/liquidity/positions', '/farms'],
          supportChainIds: SUPPORT_FARMS,
        },
        {
          label: t('Position Manager'),
          href: '/position-managers',
          supportChainIds: POSITION_MANAGERS_SUPPORTED_CHAINS,
        },
      ].map((item) => addMenuItemSupported(item, chainId)),
    },
    {
      label: t('Info'),
      href: '/info/v3',
      icon: BridgeIcon,
      type: DropdownMenuItemType.EXTERNAL_LINK,
      image: '/images/decorations/pe2.png',
      showItemsOnMobile: false,
    },
  ].map((item) => addMenuItemSupported(item, chainId))

export default config
