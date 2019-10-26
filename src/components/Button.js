import React from "react";
import styled from "styled-components";

const StandardButton = styled.button`
  color: #fff;
  border: none;
  background-color: #2775ff;
  font-weight: 700;
  height: 48px;
  width: 250px;
  border-radius: 120px;
  outline: 0;
  cursor: pointer;
`;

const Button = props => (
  <StandardButton className="button">{props.label}</StandardButton>
);

export default Button;
