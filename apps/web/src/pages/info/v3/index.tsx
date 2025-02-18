import Overview from 'views/OldV3Info'
import { InfoPageLayout } from 'views/OldV3Info/components/Layout'

const InfoPage = () => {
  return <Overview />
}

InfoPage.Layout = InfoPageLayout
InfoPage.chains = [] // set all

export default InfoPage
