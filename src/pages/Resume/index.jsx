import NavBar from "../../components/NavBar";
import { useContext, useEffect, useState, useRef } from "react";
import { ThemeContext, LangContext } from "../../utils/context";
import frontImg from "../../assets/moutains-front.svg";
import gsap from "gsap";
import Footer from "../../components/Footer";
import "./resume.css";
import Skills from "../../components/Skills";

import bitmoji from "../../assets/bitmoji2.png";
import cv from "../../assets/cv/french.pdf";
import cvEn from "../../assets/cv/english.pdf";

import { D38038, D31114 } from "../../utils/data/diploma";
import { mooc } from "../../utils/data/resume";

const Resume = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const linkRef = useRef(null); // Premier bouton
  const pinkRef = useRef(null); // Couleur du premier bouton

  const [d38038, setData38038] = useState(D38038.en);
  const [d31114, setData31114] = useState(D31114.en);

  const [moocData, setMoocData] = useState(mooc.en);

  useEffect(() => {
    window.scrollTo(0, 0);
    lang === "en" ? setData38038(D38038.en) : setData38038(D38038.fr);
    lang === "en" ? setData31114(D31114.en) : setData31114(D31114.fr);
    lang === "en" ? setMoocData(mooc.en) : setMoocData(mooc.fr);
    // Création de la timeline GSAP pour les animations des deux boutons
    const hoverTL1 = gsap.timeline({ paused: true });

    // Animation pour le premier bouton
    hoverTL1.to(pinkRef.current, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4,
    });
    hoverTL1.to(pinkRef.current, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6,
    });

    // Gestion des événements de survol sur les deux boutons
    const handleMouseEnter1 = () => hoverTL1.play();
    const handleMouseLeave1 = () => hoverTL1.reverse();

    const linkElement1 = linkRef.current;
    linkElement1.addEventListener("mouseenter", handleMouseEnter1);
    linkElement1.addEventListener("mouseleave", handleMouseLeave1);

    // Nettoyage des événements lors du démontage du composant
    return () => {
      linkElement1.removeEventListener("mouseenter", handleMouseEnter1);
      linkElement1.removeEventListener("mouseleave", handleMouseLeave1);
    };
  }, [lang]);
  return (
    <>
      <div className={`bgConfig ${theme === "dark" ? "dark" : "day"}`}></div>
      {theme === "dark" ? <div className="starsConfig"></div> : ""}
      <header>
        <NavBar active="resume"></NavBar>
      </header>
      <section className="wrapper">
        <section className="content">
          <div>
            <div className="headerSec">
              <p>
                <span className="title">
                  {lang === "en"
                    ? "Need a frontend developer ?"
                    : "Besoin d'un développeur frontend ?"}
                </span>
                {lang === "en"
                  ? "Discover my resume and expertise in HTML, CSS, JS, React, ..."
                  : "Découvrez mon CV et mon expertise en HTML, CSS, JS React, ..."}
                <a
                  href={lang === "en" ? cvEn : cv}
                  ref={linkRef}
                  className="link"
                  type="submit"
                  target="_blank"
                  download>
                  <span ref={pinkRef} className="color"></span>
                  <span className="whitetxt">
                    {lang === "en" ? "DOWNLOAD AS PDF" : "TELECHARGER EN PDF"}
                  </span>
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
              </p>
              <img src={bitmoji} alt="bitmoji"></img>
            </div>
            <div className="education mooc">
              <div className="dcl">
                <div>
                  <h2>{d38038.title}</h2>
                  <a href="https://www.francecompetences.fr/recherche/rncp/38038/">
                    RNCP38038 (2023/2024)
                  </a>
                  <ul>
                    {d38038.skills.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>

                <div className="logo"></div>
              </div>
              <div className="dwwm">
                <div>
                  <h2>{d31114.title}</h2>
                  <a href="https://www.francecompetences.fr/recherche/rncp/31114/">
                    RNCP38038 (2022/2023)
                  </a>
                  <ul>
                    <h3>{d31114.skills.grp1.title}</h3>
                    {d31114.skills.grp1.items.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                    <h3>{d31114.skills.grp2.title}</h3>
                    {d31114.skills.grp2.items.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div className="logo"></div>
              </div>
            </div>
            <Skills />
            <div className="mooc">
              <h1>
                {lang === "en"
                  ? "My MOOC certifications"
                  : "Mes certifications MOOC"}
              </h1>
              <br />
              <div className="list">
                <div>
                  <h2>
                    {lang === "en" ? "Development : " : "Développement : "}
                  </h2>
                  <ul>
                    {moocData.dev.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2>{lang === "en" ? "CyberSecurity" : "Cyber sécurité"} </h2>
                  <ul>
                    {moocData.cyber.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2>Design : </h2>
                  <ul>
                    {moocData.design.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2>
                    {lang === "en" ? "Project management" : "Gestion de projet"}{" "}
                  </h2>
                  <ul>
                    {moocData.project.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>

                <div>
                  <h2>Marketting</h2>
                  <ul>
                    {moocData.mark.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2>Data</h2>
                  <ul>
                    {moocData.data.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div>
                  <h2>Management</h2>
                  <ul>
                    {moocData.management.map((elmt, index) => {
                      return <li key={index}>{elmt}</li>;
                    })}
                  </ul>
                </div>
                <div></div>
              </div>
            </div>
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

export default Resume;
