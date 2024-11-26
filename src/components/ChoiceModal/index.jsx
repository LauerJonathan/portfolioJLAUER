import "./modal.css";
import ReactDOM from "react-dom";
import { useContext } from "react";
import { LangContext } from "../../utils/context";

import cv from "../../assets/cv/french.pdf";
import cvEn from "../../assets/cv/english.pdf";
import { Link } from "react-router-dom";

const Modal = ({ isOpen, setOpenState }) => {
  const { lang } = useContext(LangContext);

  if (!isOpen) return null; // Empêche le rendu si `isOpen` est `false`
  // Utilisation de createPortal avec le conteneur cible (par exemple `document.body`)
  return ReactDOM.createPortal(
    isOpen ? (
      <section className="modal">
        <div className="content">
          <button
            className="close"
            onClick={() => {
              setOpenState(false);
            }}>
            X
          </button>
          <a
            className="link"
            href={lang === "en" ? cvEn : cv}
            download
            target="_blank">
            {lang === "en" ? "Download as PDF" : "Télécharger en PDF"}
          </a>{" "}
          <Link to="/resume">
            <span className="link" href="#">
              {lang === "en"
                ? "Visit the detailled page"
                : "Voir mon parcours détaillé"}
            </span>
          </Link>
        </div>
      </section>
    ) : (
      ""
    ),
    document.body
  );
};
export default Modal;
