import React, { FC } from "react";
import Props from "../../interfaces/ButtonInterface";

const IconButtons: React.FC<Props> = ({ message }) => (
  <button className="icon-button">
    {message}
  </button>
);

export default IconButtons;