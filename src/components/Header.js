import React from "react";
import styled from "styled-components";
import logoyez from "../assets/Logo_oyez.png";

const Header = () => {
  return (
    <Logowrapper>
      <img src={logoyez} alt="" />
    </Logowrapper>
  );
};

const Logowrapper = styled.div`
  position: absolute;
  width: 172px;
  height: 58px;
  left: 14px;
  top: 20px;
`;

export default Header;
