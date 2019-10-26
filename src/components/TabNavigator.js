import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../styles/navigation.css";

import HomeIcon from "../assets/home_tooth.svg";
import ScheduleIcon from "../assets/schedule.svg";
import ChatIcon from "../assets/chat.svg";
import ProfileIcon from "../assets/profile.svg";

const Container = styled.div`
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;
  border-top: 1px solid #d7e6ea;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-flow: column wrap;
  height: 100%;
`;

const PageLink = styled(props => <NavLink {...props} />)`
  display: inline-block;
  width: 25%;
  float: left;
  text-align: center;
  height: 72px;
`;

const TabIcon = styled.img`
  display: block;
  text-align: center;
  margin: 0 auto 0.2rem;
  height: 16px;
  filter: grayscale(100%);
  opacity: 0.4;
`;

const TabNavigator = () => (
  <Container className="tab-navigator">
    <PageLink activeClassName="current-page" to="/home">
      <Content>
        <TabIcon src={HomeIcon} />
        Home
      </Content>
    </PageLink>
    <PageLink activeClassName="current-page" to="/appointments">
      <Content>
        <TabIcon src={ScheduleIcon} />
        Schedule
      </Content>
    </PageLink>
    <PageLink activeClassName="current-page" to="/chat">
      <Content>
        <TabIcon src={ChatIcon} />
        Chat
      </Content>
    </PageLink>
    <PageLink activeClassName="current-page" to="/account">
      <Content>
        <TabIcon src={ProfileIcon} />
        Profile
      </Content>
    </PageLink>
  </Container>
);

export default TabNavigator;
