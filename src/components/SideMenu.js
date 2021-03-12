import React from "react";
import styled from "styled-components";

const SideMenu = () => {
  return (
    <Wrapper>
      <TitleBox>
        <h3> Administration </h3>
      </TitleBox>

      <Menu>
        <a href="/"> Les équipements disponibles </a>
        <a href="/"> Consulter l’historique des validations </a>
        <a href="/"> Gérer les utilisateurs </a>
        <a href="/"> Gérer les demandes </a>
        <a href="/"> Gérer le matériel disponible </a>
        <a href="/"> Traçer un équipement </a>
        <a href="/"> Gérer les réclamations </a>
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 512px;
  height: 645px;
  left: 35px;
  top: 128px;
  background: #f3f3f3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

const TitleBox = styled.div`
  position: absolute;
  width: 236px;
  height: 20px;

  padding: 5px 5px 25px 5px;
  align-items: center;
  margin-top: 18px;
  margin-left: 138px;

  background: #e83952;
  border-radius: 15px;

  h3 {
    padding: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 42px;
    text-align: center;

    color: #ffffff;
  }
`;

const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 100px 10px;
  height: 100vh;
  text-align: right;
 
  position: absolute;
  top: 0;
  left: 0;
  justify-content: right;
  align-items: flex-start;

  a {

    padding: 20px 0px 30px 0px ;
    font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 28px;
text-align: center;
    
    color: black;
    &:hover {
    color: white !important;
    font-size: 90;
    background-color: #e83952;
    border-radius: 10px;
    padding: 5px 5px 25px 5px;
    width: 400px;
    height:1%

  
   `;

export default SideMenu;
