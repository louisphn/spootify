import { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { TopPageContainer } from 'containers'

const Dashboard: NextPage = () => {
  return (
    <Layout pageTitle={'Spootify'} active={'Home'}>
      <TopPageContainer />
    </Layout>
  )
}

export default Dashboard
