import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import SideMenu from "./SideMenu";

const App = () => {
  return (
    <Container>
      <Header />
      <SideMenu />
      <Main />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  background: #ffffff;
  height: 1024px;
  width: 1440px;

  border-radius: 0px;
`;

export default App;
