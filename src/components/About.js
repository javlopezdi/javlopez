import React from 'react';
import '../styles/About.css';
import Download from './svgs/Download';
import LogoHtml from './svgs/LogoHtml';
import LogoCss from './svgs/LogoCss';
import LogoJavaScript from './svgs/LogoJavaScript';
import LogoNode from './svgs/LogoNode';
import LogoExpress from './svgs/LogoExpress';
import LogoMongo from './svgs/LogoMongo';
import LogoGit from './svgs/LogoGit';
import LogoReact from './svgs/LogoReact';
import Resume from '../Resume_Andres_Lopez.pdf';

const About = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-max about-background pb-48 pt-48">
      {/* Container */}
      <div className="h-full container px-12 mx-auto flex flex-col justify-center space-y-5 font-sans">
        {/* Title about me */}
        <div className="pb-10">
          <h2 className="text-princetonOrange text-center text-4xl font-bold">
            About me
          </h2>
        </div>
        {/* Content div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-lg">
          {/* About me div */}
          <div>
            {/* About me text */}
            <div className="text-xicatic pb-5 text-justify">
              <p>
                My name is Javier Lopez, I am an engineer and a
                <span className="text-princetonOrange font-bold">
                  {' '}
                  Full Stack Web Developer{' '}
                </span>
                in Yucatan, Mexico. I enjoy using Javascript related
                technologies to build the FrontEnd and the BackEnd of cool Web
                Applications that solve real problems
              </p>
              <br />
              <p>
                You can continue scrolling to see my projects or you can
                download my resume if you want to know more about me
              </p>
              <br />
              <p>
                If you think I am a good fit for your project or job
                opportunity, I would love to hear from you!
              </p>
            </div>
            {/* Download resume button */}
            <div className="flex flex-row justify-center">
              <a
                href={Resume}
                download
                className="border-cadetBlue bg-cadetBlue text-white rounded-lg border-2 border-solid px-4 py-2 flex flex-row transition duration-200 transform hover:-translate-y-0.5 hover:scale-105"
              >
                <Download logoClass="h-6 w-6" />
                <p className="pl-2">Download resume</p>
              </a>
            </div>
          </div>
          {/* Skills div */}
          <div className="text-xicatic">
            {/* Skills title */}
            <div className="text-center pb-10">
              <h3 className="text-2xl text-cadetBlue font-bold">My toolbox</h3>
            </div>
            {/* Actual skills */}
            <div className="grid grid-cols-3 gap-y-5">
              <div className="m-auto">
                <LogoHtml logoClass="h-20 w-20" />
              </div>
              <div className="m-auto">
                <LogoCss logoClass="h-20 w-20" />
              </div>
              <div className="m-auto">
                <LogoJavaScript logoClass="h-16 w-16" />
              </div>
              <div className="m-auto">
                <LogoNode logoClass="h-20 w-20" />
              </div>
              <div className="m-auto">
                <LogoExpress logoClass="h-14 w-32" />
              </div>
              <div className="m-auto">
                <LogoMongo logoClass="h-14 w-32" />
              </div>
              <div className="m-auto">
                <LogoReact logoClass="h-14 w-32" />
              </div>
              <div className="m-auto">
                <LogoGit logoClass="h-16 w-32" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
