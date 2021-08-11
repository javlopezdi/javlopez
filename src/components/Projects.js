import React from "react";

const Projects = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen">
      Projects
    </div>
  );
});

export default Projects;
