import React from "react";
import Logo from "./svgs/Logo";

const Header = (props) => {
  return (
    <nav className="text-white fixed justify-between w-full font-mono flex flex-row p-4 text-lg items-center bg-xicatic z-20">
      {/* Logo */}
      <button
        className="flex flex-row space-x-4 items-center font-bold"
        onClick={props.scroll}
      >
        <Logo size="10" />
        <p>Home</p>
      </button>
      {/* Nav options */}
      <div className="flex flex-row space-x-8">
        <button
          className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
          onClick={(e) => props.scroll(e.target.innerHTML)}
        >
          About
        </button>
        <button
          className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
          onClick={(e) => props.scroll(e.target.innerHTML)}
        >
          Projects
        </button>
        <button
          className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
          onClick={(e) => props.scroll(e.target.innerHTML)}
        >
          Challenges
        </button>
        <button
          className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
          onClick={(e) => props.scroll(e.target.innerHTML)}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Header;
