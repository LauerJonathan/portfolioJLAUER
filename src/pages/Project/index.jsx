import NavBar from "../../components/NavBar";
import "../../utils/styles/header.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, LangContext } from "../../utils/context";

import "./project.css";

import frontImg from "../../assets/moutains-front.svg";
import Footer from "../../components/Footer";

import { projects } from "../../utils/data/projects";

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const [prjList, setPrjList] = useState(projects.en);

  useEffect(() => {
    window.scrollTo(0, 0);
    lang === "en" ? setPrjList(projects.en) : setPrjList(projects.fr);
  }, [lang]);

  return (
    <>
      <div className={`bgConfig ${theme === "dark" ? "dark" : "day"}`}></div>
      {theme === "dark" ? <div className="starsConfig"></div> : ""}
      <header>
        <NavBar active="project"></NavBar>
      </header>
      <section className="wrapper prj">
        <section className="content">
          <h1>
            {lang === "en"
              ? "My work in few projects"
              : "Mon travail en quelques projets : "}
          </h1>
          <div className="prjContainer">
            {prjList.map((elmt, index) => {
              return (
                <a href={elmt.link} target="_blank" key={index} className="card">
                  <img src={elmt.img} alt="image du projet" />
                  <div>
                    <h2 key={index}>{elmt.title}</h2>
                    <p>{elmt.description}</p>
                    <div>
                      <ul>
                        {elmt.tags.map((elmt2, index2) => {
                          return <li key={index2}>{elmt2}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>
      </section>
      <object
        className="frontImg"
        type="image/svg+xml"
        data={frontImg}
        title="front mountains"></object>
      <Footer />
    </>
  );
};

export default Projects;
