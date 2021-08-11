import React from "react";

const Logo = (props) => {
  const renderSizes = () => {
    let sizes = "";
    for (const [prop, value] of Object.entries(props)) {
      if (prop === "size") {
        sizes += `w-${value} h-${value} `;
      } else {
        sizes += `${prop}:w-${value} ${prop}:h-${value} `;
      }
    }
    return sizes;
  };

  return (
    <svg
      className={renderSizes() + "text-princetonOrange"}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo">
        <path
          id="j"
          d="M27.3827 2H47.9048C48.9849 34 41.3161 98 2 98V76.4142C10.4609 74.3314 27.3827 56.5325 27.3827 2Z"
          fill="currentColor"
          stroke="currentColor"
        />
        <path
          id="l"
          d="M72.6173 2H52.0952C51.0151 34 58.6839 98 98 98V76.4142C89.5391 74.3314 72.6173 56.5325 72.6173 2Z"
          fill="currentColor"
          stroke="currentColor"
        />
      </g>
    </svg>
  );
};

export default Logo;
