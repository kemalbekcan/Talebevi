import React, { Fragment } from 'react'
import InputButton from '@/buttons/InputButton'
import Link from 'next/link'
import Layout from '@/layout/Layout'

const index = () => {
  return (
    <Fragment>
      <Layout title="Sign In">
        <div className="sign-in">
          <div className="sign-in-content">
            <div className="sign-in-content-form">
              <form>
                <h2>Login</h2>
                <div className="sign-in-content-form-input-section">
                  <label htmlFor="">
                    Username and E-mail <span className="required">*</span>{' '}
                  </label>
                  <input type="text" name="" id="" />
                </div>
                <div className="sign-in-content-form-input-section">
                  <label htmlFor="">
                    Password <span className="required">*</span>
                  </label>
                  <input type="password" name="" id="" />
                </div>
                <div className="sign-in-content-form-input-section-buttons">
                  <InputButton message="Login" />
                  <div className="sign-in-content-form-input-section-buttons-check">
                    <input type="checkbox" name="Remember Me" />
                    <label htmlFor="">Remember Me</label>
                  </div>
                </div>
                <div className="forgot">
                  <Link href={'/'}>
                    <a>Forgot your password?</a>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default index
