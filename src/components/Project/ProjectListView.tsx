import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { lerp } from "../../utils/utils.js";

type projects = {
  projectId: string;
  projectName: string;
  projectType: string;
  projectFor: string;
  projectDesc: string;
  projectMyRole: string;
  projectCover: string;
  projectLiveLink: string | null;
  projectGithubLink: string | null;
  projectTechnicalSheets: string[];
  projectBgColor: string;
};

type propsType = {
  listView: boolean;
  projects: any;
};

const ProjectListView = ({ listView, projects }: propsType) => {
  const imageRef = useRef<HTMLDivElement | null>(null);
  const [image, setImage] = useState<projects>();
  const [showImage, setShowImage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const mouse = useRef({
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    lerp: 0.1,
    offsetX: -150,
    offsetY: -150,
  });

  const handleShowImage = (project: projects) => {
    if (image?.projectId === project.projectId) return;

    setFadeOut(true);

    setTimeout(() => {
      setImage(project);
      setFadeOut(false);
      setShowImage(true);
    }, 300); // short delay for fade effect
  };

  // Cursor Functionality
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX + mouse.current.offsetX;
      mouse.current.y = e.clientY + mouse.current.offsetY;
    };

    const render = () => {
      mouse.current.tx = lerp(
        mouse.current.tx,
        mouse.current.x,
        mouse.current.lerp
      );
      mouse.current.ty = lerp(
        mouse.current.ty,
        mouse.current.y,
        mouse.current.lerp
      );

      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(${mouse.current.tx}px, ${mouse.current.ty}px, 0)`;
      }

      requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div
      className={`${
        listView ? "" : "hidden"
      } project-inner relative mx-auto lg:w-[1100px] xl:w-[1500px]`}
    >
      {projects.map((project: projects, index: number) => (
        <Link
          key={index}
          to={`/projects/${project.projectId}`}
          onMouseEnter={() => handleShowImage(project)}
          onMouseLeave={() => setShowImage(false)}
          className={`${
            projects.length - 1 === index ? "border-b" : ""
          } relative z-[2] flex cursor-pointer items-center justify-between border-t border-white/30 py-10 px-2 transition-all delay-100 duration-300 ease-in-out lg:py-14 lg:px-14 lg:hover:px-10 xl:py-16`}
        >
          <h1
            className="p-0 font-AvenirHeavy text-[26px] leading-none text-white/60 lg:text-[80px] xl:text-[70px]"
            data-aos="fade-right"
            data-aos-offset="0"
            data-aos-delay={`${200 + index * 100}`}
            data-aos-duration="600"
          >
            {project.projectName}
          </h1>
          <p
            className="z-[2] font-AvenirRoman text-[16px] text-white/60 lg:text-[24px] xl:text-[24px]"
            data-aos="fade-left"
            data-aos-offset="0"
            data-aos-delay={`${200 + index * 100}`}
            data-aos-duration="600"
          >
            {project.projectType}
          </p>
          <div
            className="text-full absolute top-[10px] right-0 z-[1] p-0 font-AvenirHeavy text-[100px] leading-none text-white/10 lg:text-[180px] lg:text-white/20 xl:top-0 xl:text-[200px] xl:text-white/10"
            data-aos="fade-down"
            data-aos-offset="0"
            data-aos-delay={`${300 + index * 100}`}
            data-aos-duration="800"
          >
            0{index + 1}
          </div>
        </Link>
      ))}

      <div
        ref={imageRef}
        className={`pointer-events-none absolute top-0 left-0 z-[10] h-[400px] w-[500px] overflow-hidden rounded-lg transition-all duration-300 ease-out xl:h-[500px] xl:w-[600px] ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      >
        {image && (
          <>
            <img
              className={`relative h-full w-full object-cover transition-all delay-150 duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
              src={image.projectCover}
              alt={image.projectName}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-all delay-150 duration-500 ${
                fadeOut ? "opacity-0" : "opacity-100"
              }`}
            >
              <button className="flex h-20 w-20 transform items-center justify-center rounded-full bg-blue-600 font-AvenirRoman text-[18px] transition-all duration-300 hover:scale-110 xl:h-32 xl:w-32">
                View
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectListView;
