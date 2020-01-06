import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const Wrapper = styled.div``;
const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const ListItem = styled.div`
  color: #bababa;
  cursor: pointer;
  border-bottom: 1px solid #e2ebee;
  font-size: 18px;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  transition: all ease-in-out 0.2s;

  &:hover {
    color: #292929;
  }
`;

const ProfilePage = () => (
  <Wrapper>
    <PageHeader label="Profile" />
    <Content>
      <ListItem>Account Information</ListItem>
      <ListItem>Treatment</ListItem>
      <ListItem>Finance</ListItem>
      <ListItem>Settings</ListItem>
      <ListItem>About Us</ListItem>
    </Content>
  </Wrapper>
);
export default ProfilePage;
