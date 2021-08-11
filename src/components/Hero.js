import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/Hero.css";
import Logo from "./svgs/Logo";
import ArrowDown from "./svgs/ArrowDown";

const Hero = (props) => {
  const scrollDown = () => {
    props.scroll("About");
  };

  return (
    // Hero section
    <div className="bg-xicatic h-screen">
      {/* container */}
      <div className="h-full w-max mx-auto flex flex-col justify-center">
        {/* Greeting text */}
        <div className="text-princetonOrange text-xl">
          <Typewriter
            options={{
              strings: ["Hi there!", "你好呀!", "Que tal!"],
              autoStart: true,
              loop: true,
              delay: 100,
              pauseFor: 2000,
            }}
          />
        </div>
        {/* Text and Logo */}
        <div className="text-white flex flex-col sm:flex-row justify-start flex-wrap">
          {/* Main text */}
          <div className="flex flex-col font-mono text-3xl md:text-5xl lg:text-7xl">
            <span>I am Javier Lopez</span>
            <span>A Web Developer</span>
          </div>
          {/* Logo */}
          <div className="h-auto flex flex-row items-center px-10">
            <Logo size="0" md="20" lg="24" />
          </div>
        </div>
        {/* Scroll down text */}
        <div>
          <button
            className="text-white flex flex-row space-x-2 items-center w-max mt-20"
            onClick={scrollDown}
          >
            <div>Scroll down</div>
            <ArrowDown logoClass="animate-bounce h-6 w-6 text-princetonOrange" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
