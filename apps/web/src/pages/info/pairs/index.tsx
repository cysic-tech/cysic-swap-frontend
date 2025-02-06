import { InfoPageLayout } from 'views/OldInfo'
import Pools from 'views/OldInfo/Pools'

const InfoPoolsPage = () => {
  return <Pools />
}

InfoPoolsPage.Layout = InfoPageLayout
InfoPoolsPage.chains = [] // set all

export default InfoPoolsPage
