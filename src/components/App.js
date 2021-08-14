import React, { useRef } from "react";
import Helmet from "react-helmet";
import Hero from "./Hero";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
// import Challenges from "./Challenges";
import Contact from "./Contact";

const App = () => {
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const challengeRef = useRef(null);
  const contactRef = useRef(null);

  const executeScroll = (text) => {
    switch (text) {
      case "About":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Projects":
        projectRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Challenges":
        challengeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Contact":
        contactRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
    }
  };

  return (
    <div>
      <Helmet
        title="Javier Lopez"
        meta={[{ name: "Javier Lopez", content: "Personal Web Portfolio" }]}
        link={[{ rel: "icon", type: "image/png", href: "favicon.ico" }]}
      />
      <Header scroll={executeScroll} />
      <Hero scroll={executeScroll} />
      <About ref={aboutRef} />
      <Projects ref={projectRef} />
      {/* <Challenges ref={challengeRef} /> */}
      <Contact ref={contactRef} />
    </div>
  );
};

export default App;
