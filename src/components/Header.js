import React from "react";
import { Menu } from "@headlessui/react";
import Logo from "./svgs/Logo";
import LogoMenu from "./svgs/LogoMenu";

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
      <div className="flex-row space-x-8 hidden md:flex">
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
        {/* <button
          className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
          onClick={(e) => props.scroll(e.target.innerHTML)}
        >
          Challenges
        </button> */}
        <button
          className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
          onClick={(e) => props.scroll(e.target.innerHTML)}
        >
          Contact
        </button>
      </div>
      <Menu>
        <Menu.Button className="md:hidden">
          <LogoMenu logoClass="h-10 w-10" />
        </Menu.Button>
        <Menu.Items className="fixed top-16 right-0 w-56 grid grid-cols-1 divide-y bg-xicaticLight rounded-xl">
          <Menu.Item className="text-left py-4 px-8">
            {({ active }) => (
              <button
                className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
                onClick={(e) => props.scroll(e.target.innerHTML)}
              >
                About
              </button>
            )}
          </Menu.Item>
          <Menu.Item className="text-left py-4 px-8">
            {({ active }) => (
              <button
                className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
                onClick={(e) => props.scroll(e.target.innerHTML)}
              >
                Projects
              </button>
            )}
          </Menu.Item>
          {/* <Menu.Item className="text-left py-4 px-8">
            {({ active }) => (
              <button
                className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
                onClick={(e) => props.scroll(e.target.innerHTML)}
              >
                Challenges
              </button>
            )}
          </Menu.Item> */}
          <Menu.Item className="text-left py-4 px-8">
            {({ active }) => (
              <button
                className="transition duration-200 hover:text-princetonOrange transform hover:-translate-y-0.5"
                onClick={(e) => props.scroll(e.target.innerHTML)}
              >
                Contact
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </nav>
  );
};

export default Header;
