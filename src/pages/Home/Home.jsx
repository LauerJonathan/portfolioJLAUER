import NavBar from "../../components/NavBar";
import "./home.css";
import "../../utils/styles/header.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext, LangContext } from "../../utils/context";

import AboutMeContent from "../../utils/context/lang/home";

import frontImg from "../../assets/moutains-front.svg";
import bitmoji from "../../assets/bitmoji.svg";
import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import LastDisplayer from "../../components/projects/lastDisplayer";
import Skills from "../../components/Skills";

const Home = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const [pageContent, setContent] = useState(AboutMeContent.english);

  useEffect(() => {
    window.scrollTo(0, 0);
    lang === "en"
      ? setContent(AboutMeContent.english)
      : setContent(AboutMeContent.french);
  }, [lang]);

  return (
    <>
      <div className={`bgConfig ${theme === "dark" ? "dark" : "day"}`}></div>
      {theme === "dark" ? <div className="starsConfig"></div> : ""}
      <header>
        <NavBar active="home"></NavBar>
      </header>
      <section className="wrapper">
        <section className="content">
          <div className="aboutMe">
            <img src={bitmoji} alt="bitmoji" />
            <div>
              <h1>
                {pageContent.title}
                <span>{pageContent.quote}</span>
              </h1>
              <p>
                <span className="under-title">&nbsp;About me&nbsp;</span>
                {pageContent.aboutMeTxt}
              </p>
              <br />
              <div className="centerContainer"></div>
            </div>
          </div>
          <Skills />
          <br />
          <LastDisplayer />
          <Contact />
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

export default Home;
