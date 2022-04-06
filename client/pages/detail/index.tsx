import Layout from '@/layout/Layout'
import React, { Fragment } from 'react'
import { FiShare2 } from 'react-icons/fi'
import { IoHeartOutline, IoLocationSharp } from 'react-icons/io5'
import { MdCompareArrows, MdOutlineBedroomChild } from 'react-icons/md'
import { BiErrorAlt, BiTime } from 'react-icons/bi'
import { AiFillPrinter, AiFillEye, AiOutlineTag, AiOutlineHome } from 'react-icons/ai'
import { FaParking, FaBuilding } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import LatestListing from '@/components/Latest/LatestListing'
import ContactOwner from '@/components/ContactOwner'

const index = () => {
  return (
    <Fragment>
      <Layout title="Detail">
        <div className="detail">
          <div className="detail-content">
            <div className="detail-content-product">
              <div className="detail-content-product-left">
                <h2 className="detail-content-product-left__title">Triple Story House for Rent</h2>
                <div className="detail-content-product-left-info">
                  <p className="detail-content-product-left-info__location">
                    <IoLocationSharp className="detail-content-product-left-info__location__icon" />
                    Jackson, Brentwood Drive<span>,</span> New Jersey
                  </p>
                  <p className="detail-content-product-left-info__time">
                    <BiTime className="detail-content-product-left-info__time__icon" />4 days ago
                  </p>
                  <p className="detail-content-product-left-info__views">
                    <AiFillEye className="detail-content-product-left-info__views__icon" />
                    57
                  </p>
                </div>
              </div>
              <div className="detail-content-product-right">
                <h2 className="detail-content-product-right__price">
                  <span>₺</span>3,500
                </h2>
                <div className="detail-content-product-right-buttons">
                  <ul>
                    <li>
                      <a href="#">
                        <BiErrorAlt className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <FiShare2 className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <IoHeartOutline className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <MdCompareArrows className="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <AiFillPrinter className="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="detail-content-product-information">
              <div className="detail-content-product-information-left">
                <div className="detail-content-product-information-left-slider">
                  <h3>Slider</h3>
                </div>
                <div className="detail-content-product-information-left-overview">
                  <h3 className="detail-content-product-information-left-overview__title">Overview</h3>
                  <ul className="detail-content-product-information-left-overview-lists">
                    <li className="detail-content-product-information-left-overview-lists-list">
                      <div className="detail-content-product-information-left-overview-lists-list-icon">
                        <AiOutlineTag className="react-icon" />
                      </div>
                      <div className="detail-content-product-information-left-overview-lists-list-content">
                        <h3 className="detail-content-product-information-left-overview-lists-list-content__title">
                          ID No
                        </h3>
                        <span className="detail-content-product-information-left-overview-lists-list-content__value">
                          17389
                        </span>
                      </div>
                    </li>
                    <li className="detail-content-product-information-left-overview-lists-list">
                      <div className="detail-content-product-information-left-overview-lists-list-icon">
                        <AiOutlineHome className="react-icon" />
                      </div>
                      <div className="detail-content-product-information-left-overview-lists-list-content">
                        <h3 className="detail-content-product-information-left-overview-lists-list-content__title">
                          Type
                        </h3>
                        <span className="detail-content-product-information-left-overview-lists-list-content__value">
                          Apartment
                        </span>
                      </div>
                    </li>
                    <li className="detail-content-product-information-left-overview-lists-list">
                      <div className="detail-content-product-information-left-overview-lists-list-icon">
                        <MdOutlineBedroomChild className="react-icon" />
                      </div>
                      <div className="detail-content-product-information-left-overview-lists-list-content">
                        <h3 className="detail-content-product-information-left-overview-lists-list-content__title">
                          Room
                        </h3>
                        <span className="detail-content-product-information-left-overview-lists-list-content__value">
                          3+1
                        </span>
                      </div>
                    </li>
                    <li className="detail-content-product-information-left-overview-lists-list">
                      <div className="detail-content-product-information-left-overview-lists-list-icon">
                        <FaBuilding className="react-icon" />
                      </div>
                      <div className="detail-content-product-information-left-overview-lists-list-content">
                        <h3 className="detail-content-product-information-left-overview-lists-list-content__title">
                          Building Age
                        </h3>
                        <span className="detail-content-product-information-left-overview-lists-list-content__value">
                          2
                        </span>
                      </div>
                    </li>
                    <li className="detail-content-product-information-left-overview-lists-list">
                      <div className="detail-content-product-information-left-overview-lists-list-icon">
                        <FaParking className="react-icon" />
                      </div>
                      <div className="detail-content-product-information-left-overview-lists-list-content">
                        <h3 className="detail-content-product-information-left-overview-lists-list-content__title">
                          Parking
                        </h3>
                        <span className="detail-content-product-information-left-overview-lists-list-content__value">
                          No
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="detail-content-product-information-left-about">
                  <h3 className="detail-content-product-information-left-about__title">About</h3>
                  <p className="detail-content-product-information-left-about__text">
                    Behen an unknown printer took a galley of type and scrambled it to make a type specimen books
                    survive d not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged It was popularised in the 1960s with the release of Letraset sheets containing
                    Lorem Ipsum passages and more recently with desktop publishing software like.
                  </p>
                </div>
                <div className="detail-content-product-information-left-details">
                  <h3 className="detail-content-product-information-left-details__title">Details</h3>
                  <ul className="detail-content-product-information-left-details-lists">
                    <li className="detail-content-product-information-left-details-lists-list">
                      <h3 className="detail-content-product-information-left-details-lists-list__title">m2</h3>
                      <span className="detail-content-product-information-left-details-lists-list__value">90</span>
                    </li>
                    <li className="detail-content-product-information-left-details-lists-list">
                      <h3 className="detail-content-product-information-left-details-lists-list__title">Bath</h3>
                      <span className="detail-content-product-information-left-details-lists-list__value">1</span>
                    </li>
                    <li className="detail-content-product-information-left-details-lists-list">
                      <h3 className="detail-content-product-information-left-details-lists-list__title">m2</h3>
                      <span className="detail-content-product-information-left-details-lists-list__value">90</span>
                    </li>
                    <li className="detail-content-product-information-left-details-lists-list">
                      <h3 className="detail-content-product-information-left-details-lists-list__title">Bath</h3>
                      <span className="detail-content-product-information-left-details-lists-list__value">1</span>
                    </li>
                    <li className="detail-content-product-information-left-details-lists-list">
                      <h3 className="detail-content-product-information-left-details-lists-list__title">m2</h3>
                      <span className="detail-content-product-information-left-details-lists-list__value">90</span>
                    </li>
                    <li className="detail-content-product-information-left-details-lists-list">
                      <h3 className="detail-content-product-information-left-details-lists-list__title">Bath</h3>
                      <span className="detail-content-product-information-left-details-lists-list__value">1</span>
                    </li>
                  </ul>
                </div>
                <div className="detail-content-product-information-left-amenities">
                  <h3 className="detail-content-product-information-left-amenities__title">Features & Amenities</h3>
                  <ul className="detail-content-product-information-left-amenities-lists">
                    <li className="detail-content-product-information-left-amenities-lists-list">
                      <BsFillCheckCircleFill className="detail-content-product-information-left-amenities-lists-list-icon" />
                      Fiber
                    </li>
                    <li className="detail-content-product-information-left-amenities-lists-list">
                      <BsFillCheckCircleFill className="detail-content-product-information-left-amenities-lists-list-icon" />
                      Fiber
                    </li>
                    <li className="detail-content-product-information-left-amenities-lists-list">
                      <BsFillCheckCircleFill className="detail-content-product-information-left-amenities-lists-list-icon" />
                      Fiber
                    </li>
                    <li className="detail-content-product-information-left-amenities-lists-list">
                      <BsFillCheckCircleFill className="detail-content-product-information-left-amenities-lists-list-icon" />
                      Fiber
                    </li>
                    <li className="detail-content-product-information-left-amenities-lists-list">
                      <BsFillCheckCircleFill className="detail-content-product-information-left-amenities-lists-list-icon" />
                      Fiber
                    </li>
                    <li className="detail-content-product-information-left-amenities-lists-list">
                      <BsFillCheckCircleFill className="detail-content-product-information-left-amenities-lists-list-icon" />
                      Fiber
                    </li>
                  </ul>
                </div>
                <div className="detail-content-product-information-left-map">
                  <h3 className="detail-content-product-information-left-map__title">Map Location</h3>
                </div>
              </div>
              <div className="detail-content-product-information-right">
                <div className="detail-content-product-information-right-section">
                  <ContactOwner />
                </div>
                <div className="detail-content-product-information-right-section">
                  <LatestListing />
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
