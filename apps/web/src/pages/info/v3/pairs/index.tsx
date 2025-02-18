import { InfoPageLayout } from 'views/OldV3Info/components/Layout'
import Pools from 'views/OldV3Info/views/PoolsPage'

const InfoPoolsPage = () => {
  return <Pools />
}

InfoPoolsPage.Layout = InfoPageLayout
InfoPoolsPage.chains = [] // set all

export default InfoPoolsPage
