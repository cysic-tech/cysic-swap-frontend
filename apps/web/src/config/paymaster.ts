import { ChainId } from '@pancakeswap/chains'
import { Currency, Native } from '@pancakeswap/sdk'
import { Address, Hex } from 'viem'

export const DEFAULT_PAYMASTER_TOKEN = Native.onChain(ChainId.CYSIC)

export const paymasterTokens: Currency[] = [DEFAULT_PAYMASTER_TOKEN]

export const paymasterInfo: {
  [gasTokenAddress: Address]: { discount: `-${number}%` | 'FREE'; discountLabel?: string }
} = {}

/**
 * Contracts that the paymaster is allowed to interact with if transaction is sponsored.
 * In addition, ERC20 Approve transactions are allowed.
 */
export const PAYMASTER_CONTRACT_WHITELIST = []

// Zyfi
export const ZYFI_PAYMASTER_URL = 'https://api.zyfi.org/api/erc20_paymaster/v1'
export const ZYFI_SPONSORED_PAYMASTER_URL = 'https://api.zyfi.org/api/erc20_sponsored_paymaster/v1'

export const ZYFI_VAULT: Address = '0x32faBA244AB815A5cb3E09D55c941464DBe31496'
export const PCS_ACCOUNT_IN_ZYFI_VAULT: Address = '0xf8d936A86a3844084Eb82b57E2107B1fEDFb1DD7'

export interface ZyfiResponse {
  txData: TxData
  gasLimit: string
  gasPrice: string
  tokenAddress: string
  tokenPrice: string
  feeTokenAmount: string
  feeTokendecimals: string
  feeUSD: string
  estimatedFinalFeeUSD: string
  estimatedFinalFeeTokenAmount: string
  markup: string
  expirationTime: string
  expiresIn: string
}

export interface TxData {
  chainId: number
  from: Address
  to: Address
  data: Hex
  value: Hex
  customData: CustomData
  maxFeePerGas: string
  gasLimit: number
}

export interface CustomData {
  paymasterParams: PaymasterParams
  gasPerPubdata: number
}

export interface PaymasterParams {
  paymaster: string
  paymasterInput: string
}
