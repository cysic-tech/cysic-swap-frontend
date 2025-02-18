import { InfoPageLayout } from 'views/Info'
import Tokens from 'views/OldInfo/Tokens'

const InfoTokensPage = () => {
  return <Tokens />
}

InfoTokensPage.Layout = InfoPageLayout
InfoTokensPage.chains = [] // set all

export default InfoTokensPage
