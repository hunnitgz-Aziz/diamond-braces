import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Close from "../assets/close.svg";

import "../styles/appointment.css";

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
const Title = styled.h5``;

const ScheduleButton = styled.button`
  color: #fff;
  border: none;
  background-color: #2775ff;
  font-weight: 700;
  height: 48px;
  width: 250px;
  border-radius: 120px;
  outline: 0;
  cursor: pointer;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
`;

const Content = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Appointment = styled.div`
  background: #f2fcff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1002;
  display: none;
`;

const ModalButton = styled.img`
  cursor: pointer;
  margin-bottom: 1rem;
`;

const ModalHeader = styled.div`
  background-color: #2775ff;
  border-bottom: 2px solid #fe4856;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  color: #fff;
`;

function SchedulePage() {
  function showModal() {
    document.getElementsByClassName("modal")[0].classList.add("show");
  }
  function hideModal() {
    document.getElementsByClassName("modal")[0].classList.remove("show");
  }

  return (
    <Wrapper>
      <PageHeader label="Schedule" />
      <ScheduleButton onClick={showModal} className="button">
        Schedule Appointment
      </ScheduleButton>
      <Content>
        <Title>Upcoming Appointments</Title>
      </Content>
      <Appointment className="modal">
        <ModalHeader>
          <ModalButton src={Close} onClick={hideModal} />
          <ModalTitle>Book Appointment</ModalTitle>
          <Content></Content>
        </ModalHeader>
      </Appointment>
    </Wrapper>
  );
}

export default SchedulePage;

//Click Schedule Apppointment CTA
//Show Modal then Select Appointment Type and Date
//Click Submit with selected options to Render as appointment card
