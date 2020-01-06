import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Avatar from "../components/Avatar";
import Card from "../components/ImageCard";

import Tooth from "../assets/tooth_card.svg";
import Kit from "../assets/EmergencyKit.png";
import Refer from "../assets/Retweet.png";
import Contact from "../assets/PhoneCall.png";

const Header = styled.div`
  background-color: #2775ff;
  border-bottom: 2px solid #fe4856;
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 1.5rem;
`;

const ProgressButton = styled.button`
  background-color: #1887ff;
  color: #fff;
  cursor: pointer;
  outline: 0;
  border: none;
  font-family: "Lato", sans-serif;
  font-size: 13px;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 30px;
`;

const Wrapper = styled.div``;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const HomePage = () => (
  <Wrapper>
    <Header>
      <Avatar />
      <ProgressButton>View Progress</ProgressButton>
    </Header>
    <Content>
      <Card label="Dental Wear & Care" image={Tooth} />
      <Card label="First Kit at Home" image={Kit} />
      <Card label="Refer A Friend" image={Refer} />
      <Card label="Contact Us" image={Contact} />
    </Content>
  </Wrapper>
);
export default HomePage;
