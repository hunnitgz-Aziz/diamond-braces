import React from "react";
import styled from "styled-components";

import Arrow from "../assets/arrow_card.svg";

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 13px 0px #e0ecf0;
  margin: 0 auto 1rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  cursor: pointer;
`;

const CardLabel = styled.p`
  margin: 0;
  display: inline-block;
`;

const ArrowCard = styled.img``;

const ImageLabel = styled.img`
  height: 20px;
  display: inline-block;
  margin-right: 0.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

const Card = props => (
  <Container>
    <Wrapper>
      <ImageLabel src={props.image} />
      <CardLabel>{props.label}</CardLabel>
    </Wrapper>
    <ArrowCard src={Arrow} />
  </Container>
);

export default Card;
