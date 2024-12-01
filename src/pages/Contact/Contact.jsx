import NavBar from "../../components/NavBar";
import StatusModal from "../../components/StatusModal";
import { useContext, useState, useRef, useEffect } from "react";
import { ThemeContext, LangContext } from "../../utils/context";
import frontImg from "../../assets/moutains-front.svg";
import gsap from "gsap";
import Footer from "../../components/Footer";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);
  const linkRef = useRef(null);
  const pinkRef = useRef(null);

  const [to, setTo] = useState(""); // Default email, can be changed by user
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");
  const [status, setStatus] = useState({
    code: null,
    en: "Message sent successfully!",
    fr: "Message envoyé avec succès !",
  });

  /****** StatusModal ******/
  const [modalState, setModalState] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    {/*setStatus({
      en: "Message sent successfully!",
      fr: "Message envoyé avec succès !",
    });*/}

    const templateParams = {
      to_email: to, // Utilisez l'adresse e-mail de l'utilisateur ou par défaut
      from: to,
      subject: subject,
      message: text,
    };

    try {
      // Remplacez 'YOUR_USER_ID' par votre identifiant utilisateur EmailJS
      // 'YOUR_TEMPLATE_ID' est l'identifiant du modèle que vous avez configuré sur EmailJS
      const result = await emailjs.send(
        "service_aene8pc", // Votre ID de service
        "template_yutx3oc", // Votre ID de modèle
        templateParams,
        "qq6hcCYG21-8Ir9pM" // Votre ID d'utilisateur
      );
      setStatus({
        code: 200,
        en: "Message sent successfully!",
        fr: "Message envoyé avec succès !",
      });
      setModalState(true);
      setTo("");
      setSubject("");
      setText("");
    } catch (error) {
      setStatus({
        code: 500,
        en: "Error while sending the message.",
        fr: "Erreur lors de l'envoi du message.",
      });
      setModalState(true);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const hoverTL1 = gsap.timeline({ paused: true });
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

    const handleMouseEnter1 = () => hoverTL1.play();
    const handleMouseLeave1 = () => hoverTL1.reverse();

    const linkElement1 = linkRef.current;
    linkElement1.addEventListener("mouseenter", handleMouseEnter1);
    linkElement1.addEventListener("mouseleave", handleMouseLeave1);

    return () => {
      linkElement1.removeEventListener("mouseenter", handleMouseEnter1);
      linkElement1.removeEventListener("mouseleave", handleMouseLeave1);
    };
  }, []);

  return (
    <>
      {modalState && <StatusModal content={status} stateFct={setModalState} />}
      <div className={`bgConfig ${theme === "dark" ? "dark" : "day"}`}></div>
      {theme === "dark" ? <div className="starsConfig"></div> : ""}
      <header>
        <NavBar active="contact"></NavBar>
      </header>
      <section className="wrapper contactSec">
        <section className="content">
          <form onSubmit={handleSubmit}>
            <h1>{lang === "en" ? "Contact-me" : "Contactez-moi"}</h1>
            <input
              type="email"
              id="email"
              name="email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
              placeholder="Your email : firstname@example.fr"
            />
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              placeholder={lang === "en" ? "Msg's object" : "Objet du message"}
            />
            <textarea
              id="message"
              name="message"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
              placeholder={
                lang === "en"
                  ? "Type your msg here..."
                  : "Entrez votre msg ici..."
              }
            />
            <button ref={linkRef} className="link" type="submit">
              <div ref={pinkRef} className="color"></div>
              <span className="whitetxt">
                {lang === "en" ? "SEND MY MSG" : "ENVOYER MON MSG"}
              </span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>
        </section>
      </section>
      <object
        className="frontImg"
        type="image/svg+xml"
        data={frontImg}
        title="front mountains"
      />
      <Footer />
    </>
  );
};

export default Contact;
