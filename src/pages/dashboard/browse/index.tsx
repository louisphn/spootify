import { NextPage } from 'next'

import { BrowsePageContainer } from 'containers'
import { Layout } from 'components/Layout'

const Browse: NextPage = () => {
  return (
    <Layout pageTitle={'Spootify'} active={'Browse'}>
      <BrowsePageContainer />
    </Layout>
  )
}

export default Browse
