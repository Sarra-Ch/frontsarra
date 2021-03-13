import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Main from "./Main";
import SideMenu from "./SideMenu";
import Dispo from "../components/pages/dispo";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Header />
      <Router>
        <SideMenu />
        <Switch>
          <Route path="/dispo" component={Dispo} />
        </Switch>
      </Router>

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
