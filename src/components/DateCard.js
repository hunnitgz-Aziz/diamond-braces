import React from "react"
import styled from "styled-components"
import Arrow from "../assets/arrow_card.svg";

const Title = styled.p`
  margin: 0;
`

const InfoA = styled.p`
  margin: 0;
  width: 100%;
`

const InfoB = styled.p`
  margin: 0;
  width: 100%;
`

const InfoC = styled.p`
  margin: 0;
`

const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 13px 0px #e0ecf0;
  margin: 0 auto 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`

const ArrowCard = styled.img`
  height: 20px;
`;

const MonthDay = styled.div`
  text-align: center;
  background: #2775ff;
  color: white;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  padding: 0.15rem;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
`

const TimeAppointment = styled.div``


const DateCard = props => (
  <Container>
    <MonthDay>
      <InfoA>{props.month}</InfoA>
      <InfoB>{props.day}</InfoB>
    </MonthDay>
    <TimeAppointment> 
      <Title>{props.appointment_type}</Title>
      <InfoC>{props.time}</InfoC>
    </TimeAppointment>
    <ArrowCard src={Arrow} />
  </Container>
)

export default DateCard