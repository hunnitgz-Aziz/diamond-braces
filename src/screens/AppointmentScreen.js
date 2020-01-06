import React, { useEffect } from "react";
import styled from "styled-components";

import "../styles/appointment.css";

const Wrapper = styled.div`
  background: #f2fcff;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1002;
`;

const Title = styled.h2``;

function Appointment() {
  return (
    <Wrapper>
      <Title>Book Appointment</Title>
    </Wrapper>
  );
}

export default Appointment;
