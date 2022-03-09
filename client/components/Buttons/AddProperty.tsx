import React, { FC } from 'react'
import Props from '../../interfaces/ButtonInterface';

const AddProperty: React.FC<Props> = ({ message }) => (
    <button>{message}</button>
  );

export default AddProperty