import "./lastDisplayer.css";
import hrnetIMG from "../../assets/projects/hrnet.png";
import lppIMG from "../../assets/lesPtitsPlats.webp";
import feIMG from "../../assets/projects/fisheyes.png";
import { LangContext } from "../../utils/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LastDisplayer = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className="lastDisplayerCont">
      <h1>
        {lang === "en"
          ? "Let's talk about ⸱⸱⸱ my lastest projects"
          : "Parlons de mes derniers projets"}
      </h1>
      <div className="lastDisplayer">
        <a href="https://lauerjonathan.github.io/hrnet/" target="_blank">
          <h2>Hrnet</h2>
          <img src={hrnetIMG} alt="project img" />
        </a>
        <a
          href="https://www.jonathanlauer.fr/virtualServer/lespetitsplats"
          target="_blank">
          <h2>LesPetitsPlats</h2>
          <img src={lppIMG} alt="project img" />
        </a>
        <a
          href="https://www.jonathanlauer.fr/virtualServer/fisheyes"
          target="_blank">
          <h2>Fisheyes</h2>
          <img src={feIMG} alt="project img" />
        </a>
      </div>
      <div className="seemore">
        <Link to="./project">
          {lang === "en" ? "See more..." : "En voir plus..."}
        </Link>
      </div>
    </section>
  );
};

export default LastDisplayer;
