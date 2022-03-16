import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Layout from '@/layout/Layout'
import { MdApartment } from 'react-icons/md'
import { GiCommercialAirplane } from 'react-icons/gi'
import { ImOffice } from 'react-icons/im'
import { BiRestaurant } from 'react-icons/bi'
import { SiReasonstudios } from 'react-icons/si'
import { MdVilla } from 'react-icons/md'
import { GoSettings } from "react-icons/go";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Layout title="Home">
        <div className="landing-page">
          <div className="landing-page-background"></div>
          <div className="landing-page-content">
            <h2 className="landing-page-content__title">
              Find the perfect place to
              <br /> Live with your family
            </h2>
            <div className="landing-page-content-filter">
              <form className="landing-page-content-filter-form">
                <div className="landing-page-content-filter-form-buttons">
                  <ul className="landing-page-content-filter-form-buttons-lists">
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span className="active">
                          <MdApartment />
                        </span>
                        Apartments
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <GiCommercialAirplane />
                        </span>
                        Commercial
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <ImOffice />
                        </span>
                        Office
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <BiRestaurant />
                        </span>
                        Restaurant
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <SiReasonstudios />
                        </span>
                        Studio Home
                      </button>
                    </li>
                    <li className="landing-page-content-filter-form-buttons-lists-list">
                      <button className="landing-page-content-filter-form-buttons-lists-list__item">
                        <span>
                          <MdVilla />
                        </span>
                        Villa
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="landing-page-content-filter-form-search">
                  <div>
                    <input type="text" placeholder="Enter Keyword Here..." />
                  </div>
                  <div>
                    <select placeholder="Select Type">
                      <option value="">Sell</option>
                      <option value="">Buy</option>
                      <option value="">Rent</option>
                    </select>
                  </div>
                  <div>
                    <select placeholder="Select Location">
                      <option value="">New York</option>
                      <option value="">California</option>
                      <option value="">United States</option>
                    </select>
                  </div>
                  <button className='landing-page-content-filter-form-search__setting-button'>
                      <GoSettings />
                    </button>
                  <button className='landing-page-content-filter-form-search__search-button'>Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Home
