import React, { Fragment } from 'react'
import Layout from '@/layout/Layout'
import IconButtons from '@/components/Buttons/IconButtons'
import InputButton from '@/components/Buttons/InputButton'
import LatestListing from '@/components/Latest/LatestListing'
import { BsTelephoneFill, BsFillEyeFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { RiGlobalFill } from 'react-icons/ri'
import { IoLocationSharp } from 'react-icons/io5'
import { ImLoop2 } from 'react-icons/im'

const index = () => {
  return (
    <Fragment>
      <Layout title="Agencies">
        <div className="agencies">
          <div className="agencies-content">
            <div className="agencies-content-left">
              <div className="agencies-content-left-section">
                <div className="agencies-content-left-section-element">
                  <div className="agencies-content-left-section-element-image">
                    <img src="/firma-icon.png" width={390} height={330} alt="" />
                    <div className="agencies-content-left-section-element-properties">
                      <h3>13 Properties</h3>
                    </div>
                  </div>
                  <div className="agencies-content-left-section-element-text">
                    <div className="agencies-content-left-section-element-text-section">
                      <h3>Sunshine</h3>
                      <div className="agencies-content-left-section-element-text-section-location">
                        <div className="agencies-content-left-section-element-text-section-location-address">
                          <IoLocationSharp className="icon" />
                          <p>3577 Lake Road</p>
                        </div>
                        <div className="agencies-content-left-section-element-text-section-location-views">
                          <BsFillEyeFill className="icon" />
                          <p>Views: 1.3K</p>
                        </div>
                      </div>
                      <div className="agencies-content-left-section-element-text-section-about">
                        <h2>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla asperiores iusto autem nostrum fugiat excepturi voluptates, a eius
                          molestias veritatis velit vitae itaque facilis.
                        </h2>
                      </div>
                      <div className="agencies-content-left-section-element-text-section-buttons">
                        <div className="agencies-content-left-section-element-text-section-buttons-details">
                          <IconButtons message="View Details" />
                        </div>
                        <div className="agencies-content-left-section-element-text-section-buttons-contact">
                          <IconButtons message={<BsTelephoneFill className="icon" />} />
                          <IconButtons message={<GrMail className="icon" />} />
                          <IconButtons message={<RiGlobalFill className="icon" />} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agencies-content-left-section-element">
                  <div className="agencies-content-left-section-element-image">
                    <img src="/firma-icon.png" width={390} height={330} alt="" />
                    <div className="agencies-content-left-section-element-properties">
                      <h3>13 Properties</h3>
                    </div>
                  </div>
                  <div className="agencies-content-left-section-element-text">
                    <div className="agencies-content-left-section-element-text-section">
                      <h3>Sunshine</h3>
                      <div className="agencies-content-left-section-element-text-section-location">
                        <div className="agencies-content-left-section-element-text-section-location-address">
                          <IoLocationSharp className="icon" />
                          <p>3577 Lake Road</p>
                        </div>
                        <div className="agencies-content-left-section-element-text-section-location-views">
                          <BsFillEyeFill className="icon" />
                          <p>Views: 1.3K</p>
                        </div>
                      </div>
                      <div className="agencies-content-left-section-element-text-section-about">
                        <h2>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla asperiores iusto autem nostrum fugiat excepturi voluptates, a eius
                          molestias veritatis velit vitae itaque facilis.
                        </h2>
                      </div>
                      <div className="agencies-content-left-section-element-text-section-buttons">
                        <div className="agencies-content-left-section-element-text-section-buttons-details">
                          <IconButtons message="View Details" />
                        </div>
                        <div className="agencies-content-left-section-element-text-section-buttons-contact">
                          <IconButtons message={<BsTelephoneFill className="icon" />} />
                          <IconButtons message={<GrMail className="icon" />} />
                          <IconButtons message={<RiGlobalFill className="icon" />} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="agencies-content-left-section-element">
                  <div className="agencies-content-left-section-element-image">
                    <img src="/firma-icon.png" width={390} height={330} alt="" />
                    <div className="agencies-content-left-section-element-properties">
                      <h3>13 Properties</h3>
                    </div>
                  </div>
                  <div className="agencies-content-left-section-element-text">
                    <div className="agencies-content-left-section-element-text-section">
                      <h3>Sunshine</h3>
                      <div className="agencies-content-left-section-element-text-section-location">
                        <div className="agencies-content-left-section-element-text-section-location-address">
                          <IoLocationSharp className="icon" />
                          <p>3577 Lake Road</p>
                        </div>
                        <div className="agencies-content-left-section-element-text-section-location-views">
                          <BsFillEyeFill className="icon" />
                          <p>Views: 1.3K</p>
                        </div>
                      </div>
                      <div className="agencies-content-left-section-element-text-section-about">
                        <h2>
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla asperiores iusto autem nostrum fugiat excepturi voluptates, a eius
                          molestias veritatis velit vitae itaque facilis.
                        </h2>
                      </div>
                      <div className="agencies-content-left-section-element-text-section-buttons">
                        <div className="agencies-content-left-section-element-text-section-buttons-details">
                          <IconButtons message="View Details" />
                        </div>
                        <div className="agencies-content-left-section-element-text-section-buttons-contact">
                          <IconButtons message={<BsTelephoneFill className="icon" />} />
                          <IconButtons message={<GrMail className="icon" />} />
                          <IconButtons message={<RiGlobalFill className="icon" />} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="agencies-content-right">
              <div className="agencies-content-right-section">
                <h3>Advanced Search</h3>
                <div className="agencies-content-right-section-filter">
                  <input type="text" placeholder="What are you looking for?" />
                  <div className="agencies-content-right-section-filter-select">
                    <select name="category" id="">
                      <option value={'selected'}>All Categories</option>
                      <option value="villa">Villa</option>
                      <option value="apartments">Apartments</option>
                      <option value="commercial">Commercial</option>
                      <option value="office">Office</option>
                      <option value="studio-home">Studio Home</option>
                    </select>
                  </div>
                  <div className="agencies-content-right-section-filter-select">
                    <select name="location" id="">
                      <option value={'selected'}>All Cities</option>
                      <option value="istanbul">İstanbul</option>
                      <option value="izmir">İzmir</option>
                      <option value="bursa">Bursa</option>
                      <option value="sinop">Sinop</option>
                      <option value="ankara">Ankara</option>
                    </select>
                  </div>
                  <div className="agencies-content-right-section-filter-select">
                    <select name="districts" id="">
                      <option value={'selected'}>All Districts</option>
                      <option value="istanbul">İstanbul</option>
                      <option value="izmir">İzmir</option>
                      <option value="bursa">Bursa</option>
                      <option value="sinop">Sinop</option>
                      <option value="ankara">Ankara</option>
                    </select>
                  </div>
                  <div className="agencies-content-right-section-filter-buttons">
                    <InputButton message="FIND PROPERTY" />
                    <button className="reset-button">
                      <ImLoop2 className="icon" /> Reset
                    </button>
                  </div>
                </div>
              </div>
              <div className="agencies-content-right-section">
                <LatestListing />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default index
