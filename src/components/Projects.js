import React from 'react';
import '../styles/Projects.css';
import ProjectCard from './ProjectCard';
import hskToolboxImage from '../images/hsktoolbox.png';
import yelpCampImage from '../images/yelpcamp.png';
import LogoReact from './svgs/LogoReact';
import LogoMongo from './svgs/LogoMongo';
import LogoExpress from './svgs/LogoExpress';
import LogoNode from './svgs/LogoNode';

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
            title="Yelp Camp"
            descriptionParagraphs={[
              `YelpCamp is an Express Web Application where you can watch or post reviews of Campground sites around the world`,
              'Anybody can watch the campgrounds and reviews, but to add any you must be signed in',
              'This Web App was made as the final project for The Web Developer Bootcamp by Colt Steele',
            ]}
            image={yelpCampImage}
            siteLink="https://afternoon-reef-37075.herokuapp.com/"
            repoLink="https://github.com/javlopezdi/YelpCamp"
            techLogos={[
              <LogoMongo logoClass="h-12 w-32" />,
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
