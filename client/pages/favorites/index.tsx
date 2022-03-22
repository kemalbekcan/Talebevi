import React, { Fragment } from 'react'
import Layout from '@/layout/Layout'
import PickButton from '@/components/Buttons/PickButton'
import IconButtons from '@/components/Buttons/IconButtons'
import InputButton from '@/components/Buttons/InputButton'
import LatestListing from '@/components/Latest/LatestListing'
import { BsTelephoneFill, BsFillEyeFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { RiGlobalFill } from 'react-icons/ri'
import { IoLocationSharp } from 'react-icons/io5'
import { ImLoop2 } from 'react-icons/im'
import FavoriteRef from '@/components/FavoriteRef'

const index = () => {
  return (
    <Fragment>
      <Layout title="Favorites">
        <div className="favorites">
          <div className="favorites-content">
            <div className="favorites-content-left">
              <div className="favorites-content-left-section">
                <div className="favorites-content-left-section-pick">
                  <div className="favorites-content-left-section-pick-button">
                    <PickButton message={'Favorite Announcements'} />
                  </div>
                  <div className="favorites-content-left-section-pick-button">
                    <PickButton message={'Favorite Agencies'} />
                  </div>
                </div>
                <div className="favorites-content-left-section-latest">
                  <LatestListing />
                </div>
              </div>
            </div>
            <div className="favorites-content-right">
              <div className="favorites-content-right-section-pick">
                <div className="favorites-content-right-section-pick-button">
                  <PickButton message={'Favorite Announcements'} />
                </div>
                <div className="favorites-content-right-section-pick-button">
                  <PickButton message={'Favorite Agencies'} />
                </div>
              </div>
              <div className="favorites-content-right-section">
                <div className="favorites-content-right-section-order">
                  <h2>My Favorite Refs</h2>
                  <div className="favorites-content-right-section-order-buttons">
                    <div className="favorites-content-right-section-order-buttons-check">
                      <input type="checkbox" />
                      <label htmlFor="">Active</label>
                    </div>
                    <div className="favorites-content-right-section-order-buttons-order">
                      <select name="order" id="">
                        <option value={'selected'}>Normal</option>
                        <option value="a-z">A-Z</option>
                        <option value="z-a">Z-A</option>
                        <option value="recently-added">Recently Added</option>
                        <option value="the-first-added">The First Added</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="favorites-content-right-section-ref">
                  <FavoriteRef />
                  <FavoriteRef />
                  <FavoriteRef />
                  <FavoriteRef />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default index
