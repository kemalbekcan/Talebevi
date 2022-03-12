import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Layout from '@/layout/Layout'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Layout title="Home">
        <div className="landing-page">
          <div className="landing-page-background"></div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Home
