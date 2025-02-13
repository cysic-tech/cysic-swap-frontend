import { basicChainId } from '@pancakeswap/chains'
import { useTheme } from '@pancakeswap/hooks'
import { useTranslation } from '@pancakeswap/localization'
import { useActiveChainId } from 'hooks/useActiveChainId'
import React, { useMemo } from 'react'
import { multiChainPaths } from 'state/info/constant'
import { logMenuClick } from 'utils/customGTMEventTracking'

import config, { ConfigMenuDropDownItemsType, ConfigMenuItemsType } from '../config/config'

export type UseMenuItemsParams = {
  onClick?: (e: React.MouseEvent<HTMLElement>, item: ConfigMenuDropDownItemsType) => void
}

export const useMenuItems = ({ onClick }: UseMenuItemsParams = {}): ConfigMenuItemsType[] => {
  const {
    t,
    currentLanguage: { code: languageCode },
  } = useTranslation()
  const { chainId } = useActiveChainId()
  const { isDark } = useTheme()

  const menuItems = useMemo(() => config(t, isDark, languageCode, chainId), [t, isDark, languageCode, chainId])

  return useMemo(() => {
    const traverseItems = <T extends ConfigMenuItemsType | ConfigMenuDropDownItemsType>(
      item: T,
      menuStatus: Record<string, string>,
      translationFn: (key: string) => string,
      onClickFn?: (e: React.MouseEvent<HTMLButtonElement>, item: ConfigMenuDropDownItemsType) => void,
      chainIdNumber?: number,
    ): T => {
      if (item?.items && item.items.length > 0) {
        const innerItems = item.items.map((currentItem) =>
          traverseItems(currentItem, menuStatus, translationFn, onClickFn, chainIdNumber),
        )
        return { ...item, items: innerItems }
      }

      const onClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (item.href) {
          logMenuClick(item.href)
        }
        item.onClick?.(e)
        onClick?.(e, item)
      }

      if (item.href === '/info/v3') {
        const href = `${item.href}${multiChainPaths[chainId || basicChainId] ?? ''}`
        return { ...item, href, onClick: onClickEvent }
      }

      return { ...item, onClick: onClickEvent }
    }

    return menuItems
  }, [t, menuItems, onClick, chainId])
}
