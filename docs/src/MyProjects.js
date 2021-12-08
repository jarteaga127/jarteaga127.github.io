import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  padding-top: 60px;
  margin-left: 32px;
  margin-right: 32px;

  @media screen and (max-width: 720px) {
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  font-size: 24px;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(375px, 1fr));
  grid-gap: 1rem;

  @media screen and (max-width: 720px) {
  }
`;

const ProjectWrapper = styled.div``;

const ProjectTile = styled.div`
  width: 100%;
  max-width: 375px;
  background-color: white;
`;

const ImageContainer = styled.div`
  width: 375px;
`;

const ProjectImage = styled.img`
  width: 100%;

  &:hover {
    opacity: 0.6;
    transition: 0.5s ease;
  }
`;

const ProjectName = styled.div`
  text-align: left;
  font-weight: bold;
  margin: 8px 16px;
  color: black;
  padding-top: 8px;
  padding-bottom: 18px;

  a {
    color: black;
    text-decoration: none;

    &:hover {
      color: darkred;
    }
  }

  @media (max-width: 405px) {
    text-align: center;
  }
`;

const ProjectName001 = styled.div``;

export default function MyProjects({ projects }) {
  return (
    <ProjectsSection id="MyWork">
      <SectionHeader>
        <h2>My Work</h2>
      </SectionHeader>
      <ProjectContainer>
        {projects.map(({ id, image, title, link, alt }) => (
          <ProjectWrapper key={id}>
            <ProjectTile>
              <ImageContainer>
                <a href={link}>
                  <ProjectImage src={image} alt={alt} />
                </a>
              </ImageContainer>

              <ProjectName>
                <a href={link}>
                  <ProjectName001>{title}</ProjectName001>
                </a>
              </ProjectName>
            </ProjectTile>
          </ProjectWrapper>
        ))}
      </ProjectContainer>
    </ProjectsSection>
  );
}
