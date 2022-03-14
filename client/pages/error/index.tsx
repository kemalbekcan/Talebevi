import React, { Fragment } from 'react'
import Layout from '@/layout/Layout'
import Image from 'next/image'
import InputButton from '@/components/Buttons/InputButton'
function index() {
  return (
    <Fragment>
      <Layout title="404">
        <div className="error">
          <div className="error-container">
            <Image src="404.png" layout="responsive" height={500} width={500} alt="" />
            <h1>ERROR PAGE</h1>
            <p>Sorry! This Page is Not Available!</p>
            <InputButton message="GO BACK TO HOME PAGE" />
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}
export default index
