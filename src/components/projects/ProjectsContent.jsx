import React from "react";
import Project from "./Project";
import sample from "/public/images/sample.png";

function ProjectsContent() {
  return (
    <div className="max-w-screen-lg p-4 mx-auto my-4 flex flex-col justify-center w-full h-full">
      <div className="py-4 px-12">
        <h1 className="text-2xl font-bold inline border-b-2 py-2 border-torch-500">
          Work
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-12 sm:px-0">
        <Project title="Project" image={sample} />
        <Project title="Project" image={sample} />
        <Project title="Project" image={sample} />
      </div>
      <div className="py-4 px-12">
        <h1 className="text-2xl font-bold inline border-b-2 py-2 border-torch-500">
          Having Fun
        </h1>
      </div>
      <div className="grid md:grid-cols-3 gap-4 px-12 sm:px-0">
        <Project title="Project" image={sample} />
        <Project title="Project" image={sample} />
        <Project title="Project" image={sample} />
      </div>
    </div>
  );
}

export default ProjectsContent;
