export default function Home() {
  return(
    <section className="title-home">
      <h1 className="title-page">
        Guia das Matilhas
      </h1>
      <img
        src={require("../images/logos/arrow-down.png")}
        alt="seta para baixo"
        className="arrow-down"
      />
    </section>
  );
}