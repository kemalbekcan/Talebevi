import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Layout from '@/layout/Layout'

const Home: NextPage = () => {
  return (
    <Fragment>
      <Layout title="Home">
        <div className="landing-page">
          <div className="landing-page-background"></div>
          <div className="landing-page-content">
            <h2 className='landing-page-content__title'>Find the perfect place to<br /> Live with your family</h2>
            <div className='landing-page-content-filter'>
              <div className='landing-page-content-filter-list'>
                <ul>
                  <li>
                    <button>Apartments</button>
                  </li>
                  <li>
                    <button>Commercial</button>
                  </li>
                  <li>
                    <button>Office</button>
                  </li>
                  <li>
                    <button>Restaurant</button>
                  </li>
                  <li>
                    <button>Studio Home</button>
                  </li>
                  <li>
                    <button>Villa</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Home
