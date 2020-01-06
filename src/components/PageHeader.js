import React from "react";
import styled from "styled-components";

const Header = styled.div`
  background-color: #2775ff;
  border-bottom: 2px solid #fe4856;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  color: #fff;
  margin: 0;
`;

const PageHeader = props => (
  <Header className="page-header">
    <Title>{props.label}</Title>
  </Header>
);

export default PageHeader;
