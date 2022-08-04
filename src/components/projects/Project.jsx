import React from "react";
import Image from "next/image";
import { VscFileCode, VscPreview } from "react-icons/vsc";

function Project(props) {

    const title = props.title;
    const image = props.image;

  return (
    <div className="w-80 md:w-60 bg-white flex flex-col justify-center items-center rounded-lg shadow-lg shadow-gray-600 dark:shadow-gray-500 m-10">
      <div className="p-4">
        <Image src={image} alt="sample" />
      </div>
      <div>
        <h1 className="capitalize text-gray-900 font-semibold">
          {title}
        </h1>
      </div>
      <div className="flex justify-around w-full p-4">
        <button className="project-button">
          <VscFileCode className="text-2xl" />
        </button>
        <button className="project-button">
          <VscPreview className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Project;
