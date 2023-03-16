import React from 'react';

export default class Construction extends React.Component {
  render() {
    return (
      <section className="construction-section">
        <h2
          className=""
        >
          Estamos em Construção...
        </h2>
        <h2
          className="text-center w-10/12"
        >
          Aguarde e em breve retornaremos mais fortes!
        </h2>
        <div
          className=""
        >
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
          <img
            src={require("../images/logos/wolf_run.gif")}
            alt="gif de lobo branco correndo"
            className="constr-gif-wolf"
          />
        </div>
      </section>
    );
  }
}