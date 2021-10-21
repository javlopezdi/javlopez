import React from 'react';
import ContactForm from './ContactForm';

const Contact = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-max pb-48 pt-36 bg-xicaticLight">
      {/* Container */}
      <div className="h-full container sm:px-20 mx-auto flex flex-col justify-center space-y-5 font-sans">
        {/* Title */}
        <div className="text-center pb-10">
          <h2 className="text-princetonOrange text-4xl font-bold">Contact</h2>
        </div>
        {/* Content div */}
        <div className="grid grid-cols-1 lg:grid-cols-2 text-white bg-cadetBlue bg-opacity-10 mx-8 md:mx-16 xl:mx-24 py-12 rounded-3xl">
          {/* Contact information */}
          <div className="mx-auto">
            <div className="pb-8  ">
              <h5 className="font-bold text-lg">Phone</h5>
              <p>+52 999 280 4555</p>
            </div>
            <div className="pb-8  ">
              <h5 className="font-bold text-lg">Email</h5>
              <p>andres22jld@gmail.com</p>
            </div>
            <div className="pb-8  ">
              <h5 className="font-bold text-lg">LinkedIn</h5>
              <a
                href="https://www.linkedin.com/in/andr%C3%A9s-javier-l%C3%B3pez-d%C3%ADaz-33a228182/"
                target="_blank"
                rel="noreferrer"
                className="text-princetonOrange underline hover:text-yellow-500"
              >
                Javier's Profile
              </a>
            </div>
            <div className="pb-8  ">
              <h5 className="font-bold text-lg">GitHub</h5>
              <a
                href="https://github.com/javlopezdi"
                target="_blank"
                rel="noreferrer"
                className="text-princetonOrange underline hover:text-yellow-500"
              >
                javlopezdi's repository
              </a>
            </div>
          </div>
          {/* Contact form */}
          <div className="px-6 md:px-0 mx-auto max-w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
