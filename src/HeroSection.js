import React from "react";
import styled from "styled-components";
import HeroImage001 from "./images/PortHero001.jpg";

const HeroSec = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 100vh;
  left: 0;
  right: 0;
  position: relative;
  overflow: hidden;
  z-index: 10;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeroText = styled.div`
  color: white;
  z-index: 10;

  h1 {
    font-family: "Righteous";
    font-size: 64px;

    @media screen and (max-width: 712px) {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 32px;

    @media screen and (max-width: 712px) {
      font-size: 18px;
      margin: 24px;
    }
  }
`;

export default function HeroSection() {
  return (
    <HeroSec>
      <HeroWrapper>
        <HeroBackground>
          <BackgroundImage src={HeroImage001} />
          <HeroText>
            <h1>Hello, My name is Joseph Arteaga</h1>
            <h2>
              I am currently seeking a career in web design and front-end web
              development.
            </h2>
          </HeroText>
        </HeroBackground>
      </HeroWrapper>
    </HeroSec>
  );
}
