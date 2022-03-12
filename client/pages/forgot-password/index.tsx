import React, { Fragment } from 'react'
import InputButton from '@/buttons/InputButton'
import Layout from '@/layout/Layout'

const index = () => {
  return (
    <Fragment>
      <Layout title="Forgot Password">
        <div className="forgot-password">
          <div className="forgot-password-content">
            <div className="forgot-password-content-form">
              <form>
                <p>Lost your password? Please enter your username or email adress. You will receive a link to create a new password via email.</p>
                <div className="forgot-password-content-form-input-section">
                  <label htmlFor="">Username and E-mail</label>
                  <input type="text" name="" id="" />
                </div>
                <div className="forgot-password-content-form-input-section-buttons">
                  <InputButton message="Reset Password" />
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
