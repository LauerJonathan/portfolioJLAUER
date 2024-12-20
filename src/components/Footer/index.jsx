import "./index.css";

const Footer = () => {
  const { lang } = useContext(LangContext);
  return (
    <footer>
      © 2024 Lauer J.{" "}
      {lang === "en" ? "All right reserved." : "Tous droits réservés."}
    </footer>
  );
};

export default Footer;
