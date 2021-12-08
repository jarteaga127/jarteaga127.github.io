import React from "react";
import styled from "styled-components";

const NavBar001 = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: darkred;
  z-index: 100;

  @media screen and (max-width: 414px) {
  }
`;

const Logo = styled.div`
  font-family: "Righteous";
  color: white;
  font-size: 24px;
  padding: 8px 16px;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 712px) {
    display: none;
  }
`;

const LinkContainer = styled.div`
  padding: 8px 16px;

  a {
    color: white;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #00ffff, 0 0 2px #00ffff,
        0 0 3px #00ffff;
    }
  }
`;

const SideMenuBtn = styled.div`
  display: none;
  padding: 8px 16px;

  button {
    font-size: 24px;
    font-weight: bold;
    color: white;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    &:hover {
      color: #fff;
      text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #00ffff, 0 0 2px #00ffff,
        0 0 3px #00ffff;
    }
  }

  @media screen and (max-width: 712px) {
    display: initial;
  }
`;

const LanguageSelect = styled.select`
  padding: 8px 16px;
  font-family: "Roboto";
  font-size: 16px;
  color: white;
  background-color: transparent;
  border: none;
  cursor: pointer;

  option {
    background-color: white;
    color: black;
  }
`;

export default function NavBar({ toggle }) {
  return (
    <NavBar001>
      <Logo>Joseph Arteaga</Logo>
      <NavLinks>
        <LinkContainer>
          <a href="#AboutMe">About</a>
        </LinkContainer>
        <LinkContainer>
          <a href="#Skills">Skills</a>
        </LinkContainer>
        <LinkContainer>
          <a href="#MyWork">My Work</a>
        </LinkContainer>
        <LinkContainer>
          <a href="#Contact">Contact</a>
        </LinkContainer>
      </NavLinks>
      {/*Turn the SideMenuBtn into a dropdown menu */}
      <SideMenuBtn>
        <button onClick={toggle}>
          <i class="fa fa-bars"></i>
        </button>
      </SideMenuBtn>
    </NavBar001>
  );
}
