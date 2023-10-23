import { useParams } from "react-router-dom";
import { Contact, Navbar, ProjectIndividual, Transition } from "../components";

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string | undefined }>();

  return (
    <>
      <Navbar />
      <ProjectIndividual projectId={slug} />;
      <Contact />
    </>
  );
};

export default ProjectPage;
