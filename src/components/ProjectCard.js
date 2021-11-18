import React from 'react';
import LogoGitHub from './svgs/LogoGitHub';

import LogoWeb from './svgs/LogoWeb';

const ProjectCard = ({
  title,
  descriptionParagraphs,
  image,
  siteLink,
  repoLink,
  techLogos,
}) => {
  const renderDescription = () => {
    return descriptionParagraphs.map((paragraph) => {
      return (
        <p className="text-justify text-white leading-none md:leading-normal">
          {paragraph}
        </p>
      );
    });
  };

  return (
    <div className="relative card w-full mx-auto rounded-xl overflow-hidden shadow-xl transition duration-300 transform hover:-translate-y-4">
      {/* Image */}
      <div className="w-full">
        <img className="object-cover w-full" src={image} alt="" />
      </div>
      {/* Title */}
      <div className="text-center py-4 bg-white">
        <h4 className="text-2xl font-bold">{title}</h4>
      </div>
      <div className="bg-white flex flex-wrap justify-center py-3 border-t-2 border-double">
        {techLogos}
      </div>
      {/* Contenido oculto */}
      <div className="p-6 absolute h-full top-0 left-0 opacity-0 bg-xicatic bg-opacity-95 transition-all duration-700 hidden-content flex flex-col">
        <div className="lg:space-y-4">
          <h4 className="text-center text-lg text-princetonOrange pb-3 font-bold">
            {title}
          </h4>
          {renderDescription()}
        </div>
        <div className="flex flex-col justify-end mx-3 h-full text-white space-y-3">
          <a
            className="bg-cadetBlue rounded-md py-2 font-semibold flex justify-center space-x-2 cursor-pointer"
            href={siteLink}
            target="_blank"
            rel="noreferrer"
          >
            <LogoWeb logoClass="h-6 w-6" />
            <p>Live site</p>
          </a>
          <a
            href={repoLink}
            target="_blank"
            rel="noreferrer"
            className="bg-cadetBlue rounded-md py-2 font-semibold flex justify-center space-x-2"
          >
            <LogoGitHub logoClass="h-6 w-6" />
            <p>GitHub</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
