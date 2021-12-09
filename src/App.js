import React, { useState } from "react";
import { ProjectData } from "./ProjectData";
import AboutMe from "./AboutMe";
import HeroSection from "./HeroSection";
import MyProjects from "./MyProjects";
import MySkills from "./MySkills";
import NavBar from "./NavBar";
import "./styles.css";
import Contact from "./Contact";
import { ContactData } from "./ContactData";
import SideMenu from "./SideMenu";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <NavBar toggle={toggle} />
      <SideMenu isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyProjects projects={ProjectData} />
      <Contact contacts={ContactData} />
    </div>
  );
}
