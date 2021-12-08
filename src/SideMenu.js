import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  color: white;
  background-color: rgba(0, 0, 0, 0.68);
  z-index: 999;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: block;
  transition: 0.3 ease-in-out;
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const CloseMenu = styled.div`
  padding-top: 2rem;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #fff;
    text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #00ffff, 0 0 2px #00ffff,
      0 0 3px #00ffff;
  }
`;

const Wrapper = styled.div``;

const Menu = styled.div``;

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

export default function SideMenu({ isOpen, toggle }) {
  
  return (
    <Container isOpen={isOpen} onClick={toggle}>
      <CloseMenu onClick={toggle}>
        <i class="fas fa-times"></i>
      </CloseMenu>
      <Wrapper>
        <Menu>
          <LinkContainer>
            <a href="#AboutMe">About Me</a>
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
        </Menu>
      </Wrapper>
    </Container>
  );
}
