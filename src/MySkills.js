import React from "react";
import styled from "styled-components";

const SkillsSection = styled.section`
  padding-top: 60px;
  width: 100%;
  max-width: 1349px;

  @media screen and (max-width: 720px) {
    margin: 0 auto;
  }
`;

const SkillsHeader = styled.div`
  text-align: center;
  font-size: 24px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-gap: 10px;
  padding: 1rem;
`;

const SkillBar = styled.div`
  display: flex;
  background-color: white;
  padding: 10px 20px;
  align-items: center;
`;

const IconContainer = styled.div`
  i {
    font-size: 24px;
  }
`;

const SkillName = styled.div`
  font-size: 18px;
  margin-left: 8px;
`;

export default function MySkills() {
  return (
    <SkillsSection id="Skills">
      <SkillsHeader>
        <h2>My Skills</h2>
      </SkillsHeader>
      <GridContainer>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>HTML</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>CSS</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>Javascript</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>JQuery</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>React.js</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>Angular</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>Adobe Photoshop</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>Adobe Dreamweaver</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>Figma</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>Japanese - JLPT N2　日本語・日本語能力試験N2</SkillName>
        </SkillBar>
        <SkillBar>
          <IconContainer>
            <i class="far fa-check-circle"></i>
          </IconContainer>
          <SkillName>English - Native Level　英語・母語</SkillName>
        </SkillBar>
      </GridContainer>
    </SkillsSection>
  );
}
