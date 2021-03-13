import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <Wrapper>
      <TitleBox>
        <h3> Administration </h3>
      </TitleBox>

      <Menu>
        <nav>
          <ul>
            <Link to="/dispo">
              <li>Les équipements disponibles</li>
            </Link>
            <Link to="/dispo">
              <li>Consulter l'historique des validations</li>
            </Link>
            <Link to="/dispo">
              <li>Gérer les utilisateurs</li>
            </Link>
            <Link to="/dispo">
              <li>Gérer les demandes</li>
            </Link>
            <Link to="/dispo">
              <li>Gérer le matériel disponible</li>
            </Link>
            <Link to="/dispo">
              <li>Gérer le matériel disponible</li>
            </Link>
            <Link to="/dispo">
              <li>Localiser un équipement</li>
            </Link>
            <Link to="/dispo">
              <li>Gérer les réclamations</li>
            </Link>
          </ul>
        </nav>
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

  Link {
    list-style: none;
  }

  li {
    list-style: none;
    padding: 20px 0px 30px 0px;
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
      height: 1%;
    }
  }
`;

export default SideMenu;
