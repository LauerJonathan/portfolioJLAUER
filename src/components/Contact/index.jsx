import { useContext, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { LangContext } from "../../utils/context";
import "./contact.css";
import Modal from "../Modal";
import { Link } from "react-router-dom";

const Contact = () => {
  const { lang } = useContext(LangContext);

  // Références pour les éléments des deux boutons
  const linkRef1 = useRef(null); // Premier bouton
  const pinkRef1 = useRef(null); // Couleur du premier bouton

  const linkRef2 = useRef(null); // Deuxième bouton
  const pinkRef2 = useRef(null); // Couleur du deuxième bouton

  const linkRef3 = useRef(null);
  const linkerRef3 = useRef(null);

  useEffect(() => {
    // Création de la timeline GSAP pour les animations des deux boutons
    const hoverTL1 = gsap.timeline({ paused: true });
    const hoverTL2 = gsap.timeline({ paused: true });

    // Animation pour le premier bouton
    hoverTL1.to(pinkRef1.current, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4,
    });
    hoverTL1.to(pinkRef1.current, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6,
    });

    // Animation pour le deuxième bouton
    hoverTL2.to(pinkRef2.current, {
      width: "calc(100% + 1.3em)",
      ease: "Elastic.easeOut(0.25)",
      duration: 0.4,
    });
    hoverTL2.to(pinkRef2.current, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "Elastic.easeOut(0.4)",
      duration: 0.6,
    });

    // Gestion des événements de survol sur les deux boutons
    const handleMouseEnter1 = () => hoverTL1.play();
    const handleMouseLeave1 = () => hoverTL1.reverse();

    const handleMouseEnter2 = () => hoverTL2.play();
    const handleMouseLeave2 = () => hoverTL2.reverse();

    const linkElement1 = linkRef1.current;
    linkElement1.addEventListener("mouseenter", handleMouseEnter1);
    linkElement1.addEventListener("mouseleave", handleMouseLeave1);

    const linkElement2 = linkRef2.current;
    linkElement2.addEventListener("mouseenter", handleMouseEnter2);
    linkElement2.addEventListener("mouseleave", handleMouseLeave2);

    // Nettoyage des événements lors du démontage du composant
    return () => {
      linkElement1.removeEventListener("mouseenter", handleMouseEnter1);
      linkElement1.removeEventListener("mouseleave", handleMouseLeave1);

      linkElement2.removeEventListener("mouseenter", handleMouseEnter2);
      linkElement2.removeEventListener("mouseleave", handleMouseLeave2);
    };
  }, []);
  const [isOpen, setOpenState] = useState(false);
  return (
    <>
      <Modal isOpen={isOpen} setOpenState={setOpenState} />
      <div className="contactBand">
        <div className="wrapper">
          {/* Premier bouton */}
          <button
            ref={linkRef1}
            className="link"
            onClick={() => {
              setOpenState(!isOpen);
            }}>
            <div ref={pinkRef1} className="color"></div>
            <span className="whitetxt">
              {lang === "en" ? "MY RESUME" : "MON CV"}
            </span>
            <i className="fa-solid fa-arrow-right"></i>
          </button>
          {/* Deuxième bouton */}

          <Link to="/contact">
            <button ref={linkRef2} className="link">
              <div ref={pinkRef2} className="color"></div>
              <span className="whitetxt">
                {lang === "en" ? "CONTACT ME" : "CONTACTEZ MOI"}
              </span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Contact;
