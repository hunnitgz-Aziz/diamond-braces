import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  width: 320px;
  height: 480px;
  margin: auto;
  background: #f2fcff;
  border-radius: 10px;
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  position: relative;
`;

const Wrap = props => <Layout>{props.children}</Layout>;

export default Wrap;
