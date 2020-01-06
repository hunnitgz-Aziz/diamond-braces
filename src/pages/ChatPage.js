import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Title = styled.h1``;
const Wrapper = styled.div``;

const ChatPage = () => (
  <Wrapper>
    <PageHeader label="Live Chat" />
  </Wrapper>
);
export default ChatPage;
