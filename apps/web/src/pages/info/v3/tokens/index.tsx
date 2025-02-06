import { InfoPageLayout } from 'views/OldV3Info/components/Layout'
import Token from 'views/OldV3Info/views/TokensPage'

const TokenPage = () => {
  return <Token />
}

TokenPage.Layout = InfoPageLayout
TokenPage.chains = [] // set all

export default TokenPage
