import { GetStaticPaths, GetStaticProps } from 'next'
import { getTokenStaticPaths, getTokenStaticProps } from 'utils/pageUtils'
import { InfoPageLayout } from 'views/Info'
import Token from 'views/OldInfo/Tokens/TokenPage'

const TokenPage = ({ address }: { address: string }) => {
  if (!address) {
    return null
  }

  return <Token routeAddress={address.toLowerCase()} />
}

TokenPage.Layout = InfoPageLayout
TokenPage.chains = []

export default TokenPage

export const getStaticPaths: GetStaticPaths = getTokenStaticPaths()

export const getStaticProps: GetStaticProps = getTokenStaticProps()
