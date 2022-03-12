import React, { Fragment } from 'react'
import InputButton from '@/buttons/InputButton'
import Layout from '@/layout/Layout'

const index = () => {
  return (
    <Fragment>
      <Layout title="Sign Up">
        <div className="sign-up">
          <div className="sign-up-content">
            <div className="sign-up-content-form">
              <form>
                <h2>Sign Up</h2>
                <div className="sign-up-content-form-input-section">
                  <label htmlFor="">
                    Name <span className="required">*</span>{' '}
                  </label>
                  <input type="text" name="" id="" />
                </div>
                <div className="sign-up-content-form-input-section">
                  <label htmlFor="">
                    Surname <span className="required">*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
                <div className="sign-up-content-form-input-section">
                  <label htmlFor="">
                    E-mail <span className="required">*</span>
                  </label>
                  <input type="text" name="" id="" />
                </div>
                <div className="sign-up-content-form-input-section">
                  <label htmlFor="">
                    Password <span className="required">*</span>
                  </label>
                  <input type="password" name="" id="" />
                </div>
                <div className="sign-up-content-form-input-section">
                  <label htmlFor="">
                    Re-Password <span className="required">*</span>
                  </label>
                  <input type="password" name="" id="" />
                </div>
                <div className="sign-up-content-form-input-section-buttons">
                  <div className="check">
                    <input type="checkbox" name="" />
                    <label htmlFor="">Membership Agreement</label>
                  </div>
                  <div className="check">
                    <input type="checkbox" name="" />
                    <label htmlFor="">Text Of Consent</label>
                  </div>
                </div>
                <InputButton message="Sign Up" />
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default index
