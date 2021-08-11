import React from "react";

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen">
      Contact
    </div>
  );
});

export default Contact;
