import React from "react";

import {
  Hero,
  AboutMe,
  Project,
  ExperienceAndEducation,
  Skills,
  Contact,
} from "../components";

const Home = () => {
  return (
    <>
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
