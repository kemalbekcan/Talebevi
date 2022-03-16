import Layout from '@/layout/Layout'
import React, { Fragment } from 'react'


function index () {
    return (
        <Fragment>
            <Layout title='Compare'>
                <div className='compare'>
                    <div className='compare-content'>
                        <h2>Compare</h2>
                        <p>No Items Selected</p>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default index