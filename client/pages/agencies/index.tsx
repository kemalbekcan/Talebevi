import React, { Fragment } from 'react'
import Image from 'next/image'
import Layout from '@/layout/Layout'
import IconButtons from '@/components/Buttons/IconButtons'
import { BsTelephoneFill, BsFillEyeFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { RiGlobalFill } from 'react-icons/ri'
import { IoLocationSharp } from 'react-icons/io5'

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
                    <Image src="/firma-icon.png" width={390} height={330} alt="" />
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
                    <Image src="/firma-icon.png" width={390} height={330} alt="" />
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
                    <Image src="/firma-icon.png" width={390} height={330} alt="" />
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
            <div className="agencies-content-right"></div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default index
