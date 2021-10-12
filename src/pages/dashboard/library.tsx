import { NextPage } from 'next'

import { Layout } from 'components/Layout'
import { LibraryContainer } from 'containers'

const Dashboard: NextPage = () => {
  return (
    <Layout pageTitle={'Spootify'} active={'Your Library'}>
      <LibraryContainer />
    </Layout>
  )
}

export default Dashboard
