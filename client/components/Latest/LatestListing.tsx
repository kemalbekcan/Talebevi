import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

const LatestListing = () => {
  return (
    <div className="latest-listing">
      <div className="latest-listing-section">
        <h2>Latest Listings</h2>
        <div className="latest-listing-section-top">
          <div className="zoom">
            <img className="img" src={'/deneme-ev.jpg'} />
          </div>
          <p className="home-type">Studio Home</p>
          <h3 className="ref-title">Triple Story House For Rent</h3>
          <p className="location">
            <IoLocationSharp className="icon" /> Abilene, Kansas
          </p>
          <h2 className="ref-price">
            $1,500
          </h2>
        </div>
        <div className="latest-listing-section-list">
          <div className="latest-listing-section-list-widget">
            <div className="zoom">
              <img className="img-list" src={'/deneme-ev.jpg'} width={400} height={285} />
            </div>
            <div className="latest-listing-section-list-widget-information">
              <h3 className="list-title">Northwest Office Space</h3>
              <p className="location list">
                <IoLocationSharp className="icon" /> Abilene, Kansas
              </p>
              <h2 className="ref-price list">
                $1,500 
              </h2>
            </div>
          </div>
          <div className="latest-listing-section-list-widget">
            <div className="zoom">
              <img className="img-list" src={'/deneme-ev.jpg'} width={400} height={285} />
            </div>
            <div className="latest-listing-section-list-widget-information">
              <h3 className="list-title">Northwest Office Space</h3>
              <p className="location list">
                <IoLocationSharp className="icon" /> Abilene, Kansas
              </p>
              <h2 className="ref-price list">
                $1,500 
              </h2>
            </div>
          </div>
          <div className="latest-listing-section-list-widget">
            <div className="zoom">
              <img className="img-list" src={'/deneme-ev.jpg'} width={400} height={285} />
            </div>{' '}
            <div className="latest-listing-section-list-widget-information">
              <h3 className="list-title">Northwest Office Space</h3>
              <p className="location list">
                <IoLocationSharp className="icon" /> Abilene, Kansas
              </p>
              <h2 className="ref-price list">
                $1,500 
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LatestListing
