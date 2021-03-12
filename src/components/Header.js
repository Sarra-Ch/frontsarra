import React from "react";
import styled from "styled-components";
import logoyez from "../assets/Logo_oyez.png";
import logout from "../assets/logout.png";

const Header = () => {
  return (
    <Container>
      <Logowrapper>
        <img src={logoyez} alt="" />
      </Logowrapper>

      <Menu>
        <button>
          <img src={logout} alt="" />
        </button>
      </Menu>
    </Container>
  );
};

const Menu = styled.button`
  button {
    position: absolute;
    background: white;
    border: none;
    height: 58px;
    border-radius: 25%;
    width: 36px;
    left: 1700px;
    right: 14px;
    top: 20px;
    outline-style: none;
  }

  img {
    border-radius: 100%;
    outline-style: none;

    &:hover {
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
        0 17px 50px 0 rgba(0, 0, 0, 0.19);
    }
  }
`;

const Logowrapper = styled.div`
  position: absolute;
  width: 172px;
  height: 58px;
  left: 14px;
  top: 20px;
`;

const Container = styled.div`
  background-color: white;
`;

export default Header;
