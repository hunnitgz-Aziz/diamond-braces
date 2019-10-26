import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div``;
const Title = styled.h1``;

const SchedulePage = () => (
  <Wrapper>
    <Title>Schedule Page</Title>
    <Link to="/">Return to Splash</Link>
  </Wrapper>
);

export default SchedulePage;
