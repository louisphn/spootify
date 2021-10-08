import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { Layout } from 'components/Layout'
import { CategoryDetailContainer } from 'containers'
import { getAsString } from 'lib/helper'

const Category: NextPage = () => {
  const router = useRouter()
  const { categoryId, categoryName } = router.query

  return (
    <Layout pageTitle={'Spootify'} active={''}>
      <CategoryDetailContainer categoryName={'test'} categoryId={getAsString(categoryId)} />
    </Layout>
  )
}

export default Category
