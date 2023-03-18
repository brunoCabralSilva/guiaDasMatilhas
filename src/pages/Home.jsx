import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return(
    <section className="title-home">
      <h1 className="title-page">
        Guia das Matilhas
      </h1>
      <img
        src={require("../images/logos/arrow-down.png")}
        alt="seta para baixo"
        className="arrow-down"
        onClick={ () => navigate('/menu')}
      />
    </section>
  );
}