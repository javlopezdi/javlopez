import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import hskToolboxImage from '../images/hsktoolbox.png';
import dogsPiImage from '../images/dogspi.png';
import LogoReact from './svgs/LogoReact';
import LogoMongo from './svgs/LogoMongo';
import LogoExpress from './svgs/LogoExpress';
import LogoNode from './svgs/LogoNode';
import LogoPostgresql from './svgs/LogoPostgresql';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16 px-5">
          {/* Card */}
          <ProjectCard
            title="HSK Toolbox"
            descriptionParagraphs={[
              `
              The HSK is the standardized test of Chinese language proficiency for non-native speakers.`,
              `
              In HSKToolbox you can choose your level of HSK and start practicing the vocabulary with
              games like Matching Game or Multiple Choice completely free!`,
              'All the progress you make is saved. Just Sign up and ace that test.',
            ]}
            image={hskToolboxImage}
            siteLink="https://hsktoolboxdemo.herokuapp.com/"
            repoLink="https://github.com/javlopezdi/hsktoolbox"
            techLogos={[
              <LogoReact logoClass="h-12 w-32" />,
              <LogoMongo logoClass="h-12 w-32" />,
              <LogoExpress logoClass="h-12 w-32" />,
              <LogoNode logoClass="h-12 w-32" />,
            ]}
          />
          <ProjectCard
            title="Dogs PI"
            descriptionParagraphs={[
              `The Dogs PI was made as the Individual Project for the Henry Bootcamp using The Dog API`,
              'Here you can find information about the breeds in The Dog API, you can watch the list of breeds, filter and sort',
              'You can even create your own Dog Breed which will be saved in the database',
            ]}
            image={dogsPiImage}
            siteLink="https://dogsdemo.herokuapp.com"
            repoLink="https://github.com/javlopezdi/PI-Dogs-main"
            techLogos={[
              <LogoPostgresql logoClass="h-14 w-32" />,
              <LogoReact logoClass="h-12 w-32" />,
              <LogoExpress logoClass="h-12 w-32" />,
              <LogoNode logoClass="h-12 w-32" />,
            ]}
          />
        </div>
      </div>
    </div>
  );
});

export default Projects;
