import React from "react";
import styled from "styled-components";

import Arrow from "../assets/arrow_card.svg";

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 13px 0px #e0ecf0;
  margin: 0 auto 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const CardLabel = styled.p`
  margin: 0;
`;

const ArrowCard = styled.img``;

const Card = props => (
  <Container>
    <CardLabel>{props.label}</CardLabel>
    <ArrowCard src={Arrow} />
  </Container>
);

export default Card;
