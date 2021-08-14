import React from "react";
import LogoGitHub from "./svgs/LogoGitHub";
import LogoReact from "./svgs/LogoReact";
import LogoMongo from "./svgs/LogoMongo";
import LogoExpress from "./svgs/LogoExpress";
import LogoNode from "./svgs/LogoNode";
import LogoWeb from "./svgs/LogoWeb";

const ProjectCard = ({
  title = "Demo title",
  description = "This is a great project that solves a real problem",
}) => {
  return (
    <div className="relative card w-72 mx-auto rounded-xl overflow-hidden shadow-xl transition duration-300 transform hover:-translate-y-4">
      {/* Image */}
      <div className="h-72">
        <img
          className="object-cover h-full"
          src="https://images.unsplash.com/photo-1591485423007-765bde4139ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt=""
        />
      </div>
      {/* Title */}
      <div className="text-center py-4 bg-white">
        <h4 className="text-2xl font-bold">{title}</h4>
      </div>
      <div className="bg-white flex flex-wrap justify-center pb-3 border-t-2 border-double">
        <div>
          <LogoReact logoClass="h-12 w-32" />
        </div>
        <div>
          <LogoExpress logoClass="h-12 w-32" />
        </div>
        <div>
          <LogoMongo logoClass="h-12 w-32" />
        </div>
        <div>
          <LogoNode logoClass="h-12 w-32" />
        </div>
      </div>
      {/* Contenido oculto */}
      <div className="p-6 absolute h-full top-0 left-0 opacity-0 bg-xicatic bg-opacity-95 transition-all duration-700 hidden-content flex flex-col">
        <div>
          <h4 className="text-center text-lg text-princetonOrange pb-3 font-bold">
            {title}
          </h4>
          <p className="text-justify text-white">{description}</p>
        </div>
        <div className="flex flex-col justify-end mx-3 h-full text-white space-y-3">
          <button className="bg-cadetBlue rounded-md py-2 font-semibold flex justify-center space-x-2">
            <LogoWeb logoClass="h-6 w-6" />
            <p>Live site</p>
          </button>
          <button className="bg-cadetBlue rounded-md py-2 font-semibold flex justify-center space-x-2">
            <LogoGitHub logoClass="h-6 w-6" />
            <p>GitHub</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
