import React from "react";

import {
  Hero,
  AboutMe,
  Project,
  ExperienceAndEducation,
  Skills,
  Contact,
  Navbar,
  Transition,
} from "../components";

const Home = () => {
  return (
    <>
      <Transition />
      <Navbar />
      <div className="h-[100vh]">
        <Hero />
      </div>
      <AboutMe />
      <Project />
      <ExperienceAndEducation />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
