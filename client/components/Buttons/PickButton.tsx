import React, { FC } from "react";
import Props from "../../interfaces/ButtonInterface";

const InputButton: React.FC<Props> = ({ message }) => (
  <button className="pick-button">
    {message}
  </button>
);

export default InputButton;