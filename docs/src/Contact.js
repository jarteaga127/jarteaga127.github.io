import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  margin-top: 60px;
  padding-top: 30px;
  padding-bottom: 20px;
  width: 100%;

  left: 0;
  right: 0;
  bottom: 0;
  background-color: #361717;
  color: white;
`;

const ContactHeader = styled.div`
  text-align: center;
  font-size: 24px;
`;

const ContactContainer = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  padding-bottom: 2rem;
`;

const ContactButton = styled.button`
  padding: 8px 16px;
  font-size: 18px;
  font-family: Roboto;
  font-weight: bold;
  background-color: transparent;
  margin: 4px;
  border: none;
  cursor: pointer;

  a {
    display: flex;
    color: white;
    align-items: center;
    text-decoration: none;

    &:hover {
      color: #fff;
      text-shadow: 0 0 1px #fff, 0 0 1px #fff, 0 0 1px #00ffff, 0 0 2px #00ffff,
        0 0 3px #00ffff;
    }
  }

  @media (max-width: 505px) {
    display: block;
  }
`;

const ContactIcon = styled.div`
  font-size: 32px;
`;

const ContactLabel = styled.div`
  margin-left: 8px;
`;

const ContactFooter = styled.div`
  width: 100%;
  border-top: solid 1px;
  padding-top: 1rem;
`;

export default function Contact({ contacts }) {
  return (
    <ContactSection id="Contact">
      <ContactHeader>
        <h2>Let's Work Together</h2>
      </ContactHeader>
      <ContactContainer>
        {contacts.map(({ id, icon, label, link }) => (
          <ContactButton key={id}>
            <a href={link}>
              <ContactIcon>{icon}</ContactIcon>
              <ContactLabel>{label}</ContactLabel>
            </a>
          </ContactButton>
        ))}
      </ContactContainer>
      <ContactFooter>2021 Created by Joseph Arteaga</ContactFooter>
    </ContactSection>
  );
}
