import React, { useEffect, useState } from "react";
import { lerp } from "../../utils/utils.js";

type projects = {
  projectName: string;
  projectType: string;
  projectDesc: string;
  projectCover: string;
  projectLink: string | null;
  projectBgColor: string;
};

type propsType = {
  listView: boolean;
  projects: projects[];
};

const ProjectListView = ({ listView, projects }: propsType) => {
  const [divPosition, setDivPosition] = useState({ top: 0, left: 0 });
  const [image, setImage] = useState<projects>();

  const [showImage, setShowImage] = useState(false);
  let cursorConfigs: any = {
    x: { previous: 0, current: 0, amt: 0.2 },
    y: { previous: 0, current: 0, amt: 0.2 },
  };

  const handleShowImage = (image: projects) => {
    setShowImage(true);
    setImage(image);
  };

  function onMouseMoveEv(event: MouseEvent) {
    const { clientX, clientY } = event;

    const mouseX = clientX;
    const mouseY = clientY;

    cursorConfigs.x.previous = mouseX;
    cursorConfigs.y.previous = mouseY;

    cursorConfigs.x.current = mouseX;
    cursorConfigs.y.current = mouseY;

    for (const key in cursorConfigs) {
      cursorConfigs[key].previous = lerp(
        cursorConfigs[key].previous,
        cursorConfigs[key].current,
        cursorConfigs[key].amt
      );
    }

    setDivPosition({
      top: cursorConfigs.y.previous,
      left: cursorConfigs.x.previous,
    });
  }

  // Cursor Functionality
  useEffect(() => {
    window.addEventListener("mousemove", onMouseMoveEv);

    return () => {
      window.removeEventListener("mousemove", onMouseMoveEv);
    };
  }, []);
  return (
    <div
      className={`${
        listView ? "" : "hidden"
      } project-inner relative mx-auto lg:w-[1100px] xl:w-[1500px]`}
    >
      {projects.map((project, index) => (
        <div
          className={`${
            projects.length - 1 === index ? "border-b" : ""
          } relative z-[2] flex cursor-pointer items-center justify-between border-t border-white/30 py-10 px-2 transition-all delay-100 duration-300 ease-in-out lg:py-14 lg:px-14 lg:hover:px-10 xl:py-16 `}
          key={index}
          onMouseEnter={() => handleShowImage(project)}
          onMouseLeave={() => setShowImage(false)}
        >
          <h1 className="p-0 font-AvenirHeavy text-[26px] leading-none text-white/60 lg:text-[80px] xl:text-[70px]">
            {project.projectName}
          </h1>
          <p className="z-[2] font-AvenirRoman text-[16px] text-white/60 lg:text-[24px] xl:text-[24px]">
            {project.projectType}
          </p>
          <div className="text-full absolute top-[10px] right-0 z-[1] p-0 font-AvenirHeavy text-[100px] leading-none text-white/10 lg:text-[180px] lg:text-white/20 xl:top-0 xl:text-[200px] xl:text-white/10">
            0{index + 1}
          </div>
        </div>
      ))}
      <div
        className={`absolute ${
          showImage ? "visible" : "hidden"
        } top-[-24px] left-[-24px] z-[10] h-[400px] w-[500px] rounded-lg xl:h-[500px] xl:w-[600px] `}
        style={{
          // top: divPosition.top,
          // left: divPosition.left,
          transform: `translate(
                  ${divPosition.left}px,
                  ${divPosition.top}px
                )`,
        }}
      >
        <img
          className="h-full w-full rounded-lg object-cover"
          src={image ? image.projectCover : ""}
          alt={image ? image.projectName : "Image"}
        />
        <div className="z-1 absolute top-0 left-0 flex h-full w-full items-center justify-center">
          <button className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 font-AvenirRoman text-[18px] xl:h-32 xl:w-32 ">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectListView;
