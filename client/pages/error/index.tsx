import React, { Fragment } from 'react'
import Link from 'next/link'
import Layout from '@/layout/Layout'
import InputButton from '@/components/Buttons/InputButton'
function index() {
  return (
    <Fragment>
      <Layout title="404">
        <div className="error">
          <div className="error-container">
            <img src="/404.png" alt="404" />
            <h1 className="error-container__title">ERROR PAGE</h1>
            <p className="error-container__description">
              Sorry! This Page is
              <br /> Not Available!
            </p>
            <Link href="/">
              <a><InputButton message="GO BACK TO HOME PAGE" /></a>
            </Link>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}
export default index
