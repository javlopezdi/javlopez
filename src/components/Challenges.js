import React from "react";

const Challenges = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen">
      Challenges
    </div>
  );
});

export default Challenges;
