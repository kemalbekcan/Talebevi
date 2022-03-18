import React from 'react'
import {AiFillHeart} from 'react-icons/ai'

const FavoriteRef = () => {
  return (
    <div className="favorite-ref">
      <div className='zoom'>
        <img src="/deneme-ev.jpg" alt="" />
      </div>
      <div className="favorite-ref-text">
        <div className="favorite-ref-text-title">
          <h2 className="title">Maslak 1453 Yanı Modern Eşyalı 1+1 Kiralık Daire - 805 Errahome</h2>
        </div>
        <div className="favorite-ref-text-price">
          <h2 className="price">$1,500</h2>
        </div>
        <div className="favorite-ref-text-status">
          <h2 className="status">Active</h2>
        </div>
        <div className='favorite-ref-text-icon'>
            <AiFillHeart/>
        </div>
      </div>
    </div>
  )
}

export default FavoriteRef
