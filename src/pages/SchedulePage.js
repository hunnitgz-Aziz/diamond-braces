import React, { useState } from "react";
import styled from "styled-components";
import PageHeader from "../components/PageHeader";
import Close from "../assets/close.svg";
import TextField from "@material-ui/core/TextField"

import "../styles/appointment.css";

import moment from 'moment';

import DateCard from '../components/DateCard'



const SchedulePage = (props) => {
  const {classes} = props;

  function showModal() {
    document.getElementsByClassName("modal")[0].classList.add("show");
  }
  function hideModal() {
    document.getElementsByClassName("modal")[0].classList.remove("show");
  }

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [cards, setCards] = useState([])

  console.log(cards)

  const addAppointment = (m,d,t) => {
    setCards([
      ...cards,
      {
        appointment_type: 'Regular Checkup',
        month: m,
        day: d,
        time: t,
      },
    ])
  }

  function handleSubmit(event) {
    event.preventDefault();
    hideModal()
    console.log( 'Date:', date, 'Time: ', time); 
    const testDate = new Date(date)
    const m = moment(testDate)
    var b = m.add(1, 'day'); 
    const number = moment(time, ["HH.mm"]).format("hh:mm a");
    addAppointment(m.format('MMM'),m.get('date'),number);
  }

  return (
    <Wrapper>
      <PageHeader label="Schedule" />
      <ScheduleButton onClick={showModal} className="button">
        Schedule Appointment
      </ScheduleButton>
      <Content>
        <Title>Upcoming Appointments</Title>
        <div id="appointment-container">
          {cards.map((card, index) => (
              <DateCard
                key={index}
                appointment_type={card.appointment_type}
                month={card.month}
                day={card.day}
                time={card.time}
              />
            ))}
        </div>
      </Content>
      <Appointment className="modal">
        <ModalHeader>
          <ModalButton src={Close} onClick={hideModal} />
          <ModalTitle>Book Appointment</ModalTitle>
        </ModalHeader>
        <Content>
        <ScheduleForm noValidate onSubmit={handleSubmit}>
            <TextField
              id="date"
              label=""
              type="date"
              // defaultValue={date}
              value={date}
              onInput={ e=>setDate(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
             <TextField
              id="time"
              label=""
              type="time"
              // defaultValue={time}
              value={time}
              onInput={ e=>setTime(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
            <VisitButton type="submit">Schedule Visit</VisitButton>
          </ScheduleForm>
        </Content>
      </Appointment>
    </Wrapper>
  );
}

export default SchedulePage;

//Click Schedule Apppointment CTA
//Show Modal then Select Appointment Type and Date
//Click Submit with selected options to Render as appointment card

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

const VisitButton = styled.button`
  color: #fff;
  border: none;
  background-color: #2775ff;
  font-weight: 700;
  height: 48px;
  width: 100%;
  border-radius: 120px;
  outline: 0;
  cursor: pointer;
`

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

const ScheduleForm = styled.form`
  > div {
    display: block;
    width: 100%;

    .MuiInput-root {
      width: 100%;
      margin-bottom: 1.5rem;
    }
  }
`

const Card = styled.div``
