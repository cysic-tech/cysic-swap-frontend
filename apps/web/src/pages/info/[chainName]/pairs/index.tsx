import { InfoPageLayout } from 'views/Info'
import Pools from 'views/OldInfo/Pools'

const InfoPoolsPage = () => {
  return <Pools />
}

InfoPoolsPage.Layout = InfoPageLayout
InfoPoolsPage.chains = []

export default InfoPoolsPage
