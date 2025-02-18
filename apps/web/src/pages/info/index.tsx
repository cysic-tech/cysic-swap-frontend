import { InfoPageLayout } from 'views/OldInfo'
import Overview from 'views/OldInfo/Overview'

const InfoPage = () => {
  return <Overview />
}

InfoPage.Layout = InfoPageLayout
InfoPage.chains = [] // set all

export default InfoPage
