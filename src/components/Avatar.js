import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div``;
const ProfilePic = styled.img`
  height: 64px;
  width: 64px;
  border-radius: 200px;
`;
const ProfileName = styled.h4`
  color: #fff;
  margin: 0 auto 0.8rem;
`;

const Wrapper = styled.div``;

const Loading = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 64px;
  width: 64px;
  border-radius: 200px;
  margin: 0 auto;
`;

const useFetch = (url, options) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setResponse(json);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);
  return { response, error };
};

function Avatar() {
  const res = useFetch("https://randomuser.me/api/", {});
  if (!res.response) {
    return <Loading></Loading>;
  }
  console.log(res.response.results[0])
  const Name = res.response.results[0].name.first;
  const Photo = res.response.results[0].picture.large;
  return (
    <Container>
      <Wrapper>
        <ProfilePic src={Photo} />
        <ProfileName>Hey, {Name}!</ProfileName>
      </Wrapper>
    </Container>
  );
}

export default Avatar;
