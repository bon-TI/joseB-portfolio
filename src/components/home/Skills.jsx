import React from "react";
import Tech from "./Tech";
import {
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaReact,
} from "react-icons/fa";
import { SiTailwindcss, SiFlask, SiNextdotjs } from "react-icons/si";

function Skills() {
  return (
    <div className="w-full md:h-screen sm:my-0">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full w-full">
        <div className="px-4 md:px-0">
          <h1 className="capitalize text-4xl font-bold my-4 font-inter bold">
            <span className="text-torch-500">My</span>
            <span className="text-torch-100"> Skills</span>
          </h1>
          <p className="font-inter my-4 dark:text-white">
            I have experience with a wide range of technologies and languages
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-0">
          <Tech brand={<FaHtml5 />} name="Html" color="text-orange-500"/>
          <Tech brand={<FaCss3Alt />} name="Css" color="text-blue-500"/>
          <Tech brand={<FaJsSquare />} name="Javascript" color="text-yellow-400"/>
          <Tech brand={<FaReact />} name="React JS" color="text-sky-400"/>
          <Tech brand={<FaNodeJs />} name="Node JS" color="text-lime-600"/>
          <Tech brand={<SiNextdotjs />} name="Next JS" color="text-stone-600"/>
          <Tech brand={<FaGitAlt />} name="Git" color="text-orange-600"/>
          <Tech brand={<SiTailwindcss />} name="Tailwind CSS" color="text-teal-400"/>
          <Tech brand={<SiFlask />} name="Flask" color="text-stone-600"/>
        </div>
      </div>
    </div>
  );
}

export default Skills;
