import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Home.css";
import About from "../../components/About/About";
import Tech from "../../components/Tech/Tech";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import IconLink from "../../components/IconLink/IconLink";
import projects from "../../json/projects.json";
import technologies from "../../json/technologies.json";
import contacts from "../../json/contacts.json";
import { Modal, Button } from "react-materialize";
import M from "materialize-css";

// const About = lazy(() => import("../../components/About/About"));
// const Tech = lazy(() => import("../../components/Tech/Tech"));
// const ProjectCard = lazy(() =>
//   import("../../components/ProjectCard/ProjectCard")
// );

const Home = () => {
  const [about, setAbout] = useState(false);
  const aboutComponent = about ? <About /> : <div id="about-blank"></div>;

  const [tech, setTech] = useState(false);
  const techComponent = tech ? (
    <>
      {technologies.map((tech) => (
        <Tech key={tech.id} {...tech} />
      ))}
    </>
  ) : (
    <div id="tech-blank"></div>
  );

  const [project, setProject] = useState(false);
  const projectComponent = project ? (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </>
  ) : (
    <div id="project-blank"></div>
  );

  useEffect(() => {
    var elems = document.querySelectorAll(".parallax");

    M.Parallax.init(elems);
  }, []);

  const lazyAbout = (entries) => {
    entries.forEach((entry) => {
      if (!about) {
        if (entry.isIntersecting) {
          setAbout(true);
        }
      }
    });
  };

  const lazyTech = (entries) => {
    entries.forEach((entry) => {
      if (!tech) {
        if (entry.isIntersecting) {
          setTech(true);
        }
      }
    });
  };

  const lazyProject = (entries) => {
    entries.forEach((entry) => {
      if (!project) {
        if (entry.isIntersecting) {
          setProject(true);
        }
      }
    });
  };

  useEffect(() => {
    let options = {
      rootMargin: "400px",
      threshold: 1.0,
    };
    let optionsTwo = {
      rootMargin: "40px",
      threshold: 1.0,
    };
    let optionsThree = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const aboutObserver = new IntersectionObserver(lazyAbout, options);
    const techObserver = new IntersectionObserver(lazyTech, optionsTwo);
    const projectObserver = new IntersectionObserver(lazyProject, optionsThree);

    let aboutTarget = document.querySelector("#about");
    let techTarget = document.querySelector("#tech");
    let projectTarget = document.querySelector("#projects");

    aboutObserver.observe(aboutTarget);
    techObserver.observe(techTarget);
    projectObserver.observe(projectTarget);
  }, []);

  return (
    <div>
      <div className="parallax-container">
        <div className="parallax">
          <img id="background" src="./img/Full-stack-development.png" />
        </div>
      </div>
      <div id="about" className="row section-dark">
        <div id="about-me" className="col s12 offset-m1">
          <h3>About Me</h3>
          <div id="break"></div>
          <Suspense fallback={null}>{aboutComponent}</Suspense>
        </div>
      </div>
      <div id="tech" className="row section-light">
        <div className="col offset-m1">
          <h3>Technical Skills</h3>
          <div id="break-two"></div>
          <div className="row">
            <Suspense fallback={null}>{techComponent}</Suspense>
          </div>
        </div>
      </div>
      <div className="row section-dark">
        <h3 id="projects">
          Projects
        </h3>
        <div id="break"></div>
        <Suspense fallback={null}>{projectComponent}</Suspense>
      </div>
      {/* <div className="parallax-container">
        <div className="parallax">
          <img src="./img/IMG_3503.jpeg" />
        </div>
      </div> */}
      <div id="contact" className="row contact">
        <div className="col offset-m1"></div>
        {/* <div id="contacts" className="col m12"> */}
          {contacts.map((contact) => (
            <IconLink key={contact.alt} {...contact} />
          ))}
          <div className="col s12 m2">
            <h5 className="logo-name">Phone</h5>
            <Modal
              actions={[
                <Button flat modal="close" node="button" waves="green">
                  Close
                </Button>,
              ]}
              bottomSheet={false}
              fixedFooter={false}
              header="Cell Number"
              id="Modal-0"
              open={false}
              options={{
                dismissible: true,
                endingTop: "10%",
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: "4%",
              }}
              trigger={
                <img
                  className="icon-logo"
                  src="./img/phone-logo.png"
                  alt="phone"
                />
              }
            >
              <p>(404) 358-3607</p>
            </Modal>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
};

export default Home;
