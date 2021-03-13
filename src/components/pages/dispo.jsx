import React from "react";
import styled from "styled-components";

const Dispo = () => {
  return (
    <Container>
      <h1> </h1>
    </Container>
  );
};

const Container = styled.div`
  z-index: 100;
  position: absolute;
  width: 350px;
  height: 40px;
  left: 45%;

  top: 0px;
  background-color: #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  margin-top: 130px;
  margin-bottom: 500px;

  padding: 550px 250px 55px 500px;
`;

export default Dispo;
