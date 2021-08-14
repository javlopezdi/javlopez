import React from "react";
import "../styles/Projects.css";
import ProjectCard from "./ProjectCard";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-max pb-48 pt-48 bg-ghostWhite">
      {/* Container */}
      <div className="h-full container sm:px-20 mx-auto flex flex-col justify-center space-y-5 font-sans">
        {/* Title */}
        <div className="text-center pb-10">
          <h2 className="text-princetonOrange text-4xl font-bold">Projects</h2>
        </div>
        {/* Content div */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-16">
          {/* Card */}
          <ProjectCard
            title="HSK Toolbox"
            description="A Web Application that allows you to prepare for the chinese
            proficiency test completely free! Just Sign up and ace that test"
          />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
});

export default Projects;
