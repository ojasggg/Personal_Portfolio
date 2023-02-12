import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";

type propsType = {
  listView: boolean;
  setListView: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProjectViewButton = ({ listView, setListView }: propsType) => {
  return (
    <div className="mt-10 mr-2 flex justify-end lg:mx-auto lg:w-[1100px] xl:w-[1500px]">
      <div
        className="flex items-center justify-end gap-2 lg:gap-4"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="800"
      >
        <button
          className={`${
            listView ? "bg-white text-black" : "bg-transparent text-white"
          } rounded-full border-2 border-white/60 p-3 transition ease-in hover:bg-white hover:text-black xl:p-4 `}
          onClick={() => setListView(true)}
        >
          <AiOutlineUnorderedList size={22} />
        </button>
        <button
          className={`${
            listView ? "bg-transparent text-white" : "bg-white text-black"
          } rounded-full border-2 border-white/60 p-3  transition ease-in hover:bg-white hover:text-black xl:p-4`}
          onClick={() => setListView(false)}
        >
          <RxDashboard size={22} />
        </button>
      </div>
    </div>
  );
};

export default ProjectViewButton;
