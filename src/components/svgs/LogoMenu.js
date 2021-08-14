import React from "react";

const LogoMenu = ({ logoClass }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={logoClass}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export default LogoMenu;
