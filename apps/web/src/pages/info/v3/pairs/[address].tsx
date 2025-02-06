import { useRouter } from 'next/router'
import { InfoPageLayout } from 'views/OldV3Info/components/Layout'
import Pool from 'views/OldV3Info/views/PoolPage'

const PoolPage = () => {
  const router = useRouter()
  return <Pool address={String(router.query.address).toLowerCase()} />
}

PoolPage.Layout = InfoPageLayout
PoolPage.chains = [] // set all

export default PoolPage
