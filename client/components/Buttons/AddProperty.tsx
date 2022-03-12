import React, { FC } from 'react'
import Props from '../../interfaces/ButtonInterface'
import { FaPlusCircle } from 'react-icons/fa'

const AddProperty: FC<Props> = ({ message }) => {
  return (
    <div className="property-button">
      <div className="property-button-left">
        <FaPlusCircle />
      </div>
      <div className="property-button-right">{message}</div>
    </div>
  )
}

export default AddProperty
