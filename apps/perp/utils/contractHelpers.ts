// Addresses
// import { getBunnyFactoryAddress } from 'utils/addressHelpers'

// ABI
// import { bunnyFactoryABI } from 'config/abi/bunnyFactory'
import { ChainId } from '@pancakeswap/chains'
import { viemClients } from 'utils/viem'
import {
  Abi,
  Address,
  GetContractReturnType,
  PublicClient,
  WalletClient,
  erc20Abi,
  erc721Abi,
  getContract as viemGetContract,
} from 'viem'

export const getContract = <TAbi extends Abi | readonly unknown[], TWalletClient extends WalletClient>({
  abi,
  address,
  chainId = ChainId.BSC,
  publicClient,
  signer,
}: {
  abi: TAbi | readonly unknown[]
  address: Address
  chainId?: ChainId
  signer?: TWalletClient
  publicClient?: PublicClient
}) => {
  const c = viemGetContract({
    abi,
    address,
    client: {
      public: publicClient ?? viemClients[chainId],
      wallet: signer,
    },
  }) as unknown as GetContractReturnType<TAbi, PublicClient, Address>

  return {
    ...c,
    account: signer?.account,
    chain: signer?.chain,
  }
}

export const getBep20Contract = (address: Address, signer?: WalletClient) => {
  return getContract({ abi: erc20Abi, address, signer })
}

export const getErc721Contract = (address: Address, walletClient?: WalletClient) => {
  return getContract({
    abi: erc721Abi,
    address,
    signer: walletClient,
  })
}

// export const getBunnyFactoryContract = (signer?: WalletClient) => {
//   return getContract({ abi: bunnyFactoryABI, address: getBunnyFactoryAddress(), signer })
// }