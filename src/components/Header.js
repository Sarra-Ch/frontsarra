import React from "react";
import styled from "styled-components";
import logoyez from "../assets/Logo_oyez.png";
import logout from "../assets/logout.png";
import profile from "../assets/profile.png";
import notif from "../assets/notif.png";

const Header = () => {
  return (
    <Container>
      <Logowrapper>
        <img src={logoyez} alt="" />
      </Logowrapper>

      <Menu>
        <button>
          <img src={notif} alt="" />
        </button>
        <button>
          <img src={profile} alt="" />
        </button>
        <button>
          <img src={logout} alt="" />
        </button>
      </Menu>
    </Container>
  );
};

const Menu = styled.div`
  position: absolute;
  width: 173px;
  height: 43px;
  left: 1245px;
  top: 27px;

  padding: 0px 0px 100px 420px;
  justify-items: right;

  button {
    position: relative;
    background: white;
    border: none;
    border-radius: 100%;
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
