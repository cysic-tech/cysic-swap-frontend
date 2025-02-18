import { GetStaticPaths, GetStaticProps } from 'next'
import { getTokenStaticPaths, getTokenStaticProps } from 'utils/pageUtils'
import { InfoPageLayout } from 'views/OldV3Info/components/Layout'
import Token from 'views/OldV3Info/views/TokenPage'

const TokenPage = ({ address }: { address: string }) => {
  if (!address) {
    return null
  }

  return <Token address={address.toLowerCase()} />
}

TokenPage.Layout = InfoPageLayout
TokenPage.chains = [] // set all

export default TokenPage

export const getStaticPaths: GetStaticPaths = getTokenStaticPaths()

export const getStaticProps: GetStaticProps = getTokenStaticProps()
