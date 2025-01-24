import { ConfigType, FAQConfig } from '../types'
import { swapFAQConfig } from './swap'

export const faqConfig: Record<ConfigType, FAQConfig> = {
  swap: swapFAQConfig,
}

export const faqTypeByPage: Record<string, ConfigType> = {
  '/': 'swap',
}
