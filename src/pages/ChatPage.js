import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Title = styled.h1``;
const Wrapper = styled.div``;

const ChatPage = () => (
  <Wrapper>
    <Title>Chat Page</Title>
    <Link to="/">Return to Splash</Link>
  </Wrapper>
);
export default ChatPage;
