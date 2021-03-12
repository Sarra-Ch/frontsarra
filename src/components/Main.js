import styled from "styled-components";
import welcomeImgs from "../assets/homeimg.png";

const Main = () => {
  return (
    <Container>
      <WelcomeT>
        <h1>À vous d’aller plus </h1>
        <span>loin</span>
      </WelcomeT>
      <img src={welcomeImgs} alt="" />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    position: absolute;
    width: 532px;
    height: 531px;
    left: 745px;
    top: 236px;
  }
`;
const WelcomeT = styled.div`
  h1 {
    position: absolute;
    width: 465px;
    height: 61px;
    left: 779px;
    top: 143px;

    font-family: Roboto;
    font-style: normal;
    font-weight: 300;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #000000;
  }

  span {
    position: absolute;
    width: 77px;
    height: 43px;
    left: 1160px;
    top: 143px;
    background: #e83952;
    border-radius: 25px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #ffffff;
  }
`;

export default Main;
