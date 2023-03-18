import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <section>
      <header className="title-home">
        <h1 className="title-page">
          Guia das Matilhas
        </h1>
        <img
          src={require("../images/logos/arrow-down.png")}
          alt="seta para baixo"
          className="arrow-down"
          onClick={ () => navigate('/menu')}
        />
      </header>
      <Footer />
    </section>
  );
}