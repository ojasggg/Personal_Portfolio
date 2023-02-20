import { useEffect } from "react";
import ReactGA from "react-ga";
import { useParams } from "react-router-dom";
import { Contact, Navbar, ProjectIndividual, Transition } from "../components";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string | undefined }>();

  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });

  return (
    <>
      <Transition />
      <Navbar />
      <ProjectIndividual projectId={slug} />;
      <Contact />
    </>
  );
};

export default ProjectPage;
