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
        <a>
          <Link to="/dispo">Les équipements disponibles</Link>
        </a>
        <a>
          <Link to="/dispo">Consulter l'historique des validations</Link>
        </a>
        <a>
          <Link to="/dispo">Gérer les utilisateurs</Link>
        </a>
        <a>
          <Link to="/dispo">Gérer les demandes</Link>
        </a>
        <a>
          <Link to="/dispo">Gérer le matériel disponible</Link>
        </a>
        <a>
          <Link to="/dispo">Gérer le matériel disponible</Link>
        </a>
        <a>
          <Link to="/dispo">Localiser un équipement</Link>
        </a>
        <a>
          <Link to="/dispo">Gérer les réclamations</Link>
        </a>
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
  padding: 10px 10px 0px 20px;
  top: 15%;
  text-align: right;

  position: absolute;
  justify-content: space-evenly;
  justify-content: right;
  align-items: flex-start;

  a {
    text-decoration: none;
    margin: 0rem;
    list-style: none;
    padding: 20px 10px 15px 0px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: black;
    &:hover {
      color: white;
      background: #e83952;
      border-radius: 10px;
      padding: 10px 5px 5px 3px;
      justify-items: center;
    }
  }
`;

export default SideMenu;
