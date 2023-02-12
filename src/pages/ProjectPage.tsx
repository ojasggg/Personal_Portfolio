import { useParams } from "react-router-dom";
import { Contact, Navbar, ProjectIndividual } from "../components";

const ProjectPage = () => {
  const { slug } = useParams();

  return (
    <>
      <Navbar />
      <ProjectIndividual projectId={slug} />;
      <Contact />
    </>
  );
};

export default ProjectPage;
