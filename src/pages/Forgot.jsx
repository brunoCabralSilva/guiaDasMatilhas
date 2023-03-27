import { useEffect, useState } from "react";
import { findByEmail } from "../back/querys";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const errorMessage = (message) => {
    if (message !== '') {
      return (<div className="error-message-register">{message}</div>);
    } return <div className="space-between" />
  }

  const verifyEmail = async () => {
    const query = await findByEmail(email);
    setErrorEmail(query);
    setTimeout(() => {
      setErrorEmail('');
    }, 5000)
  }

  return(
    <section>
      <div className="title-carousel">
      <section className="section-login-register">
          <img
            onClick={() => navigate('/')}
            src={require("../images/logos/wolf.png")}
            alt="icone de lobo"
            className="login-image"
          />
          <h1 className="title-page-login">
            Guia das Matilhas
          </h1>
          <div className="div-login">
            <div className="admin-message-forgot">
              Funcionalidade ainda em fase de criação. Sentimos muito pelo transtorno.
              {/* Esqueceu sua senha? Informe o seu e-mail cadastrado */}
            </div>
            <input
              className="admin-input-register"
              value={email}
              placeholder="E-mail"
              onChange={ (e) => setEmail(e.target.value) }
              type="text"
            />
            <button
              className="admin-button-enable admin-button btn-forgot"
              id="btn-login-register"
              onKeyPress={ verifyEmail }
              onClick={ verifyEmail }
              >
              Enviar
            </button>
            { errorMessage(errorEmail) }
              {
                document.addEventListener('keydown', function(e) {
                  if(e.key === "Enter"){
                    document.getElementById("btn-login-register").click();
                  }
                })
              }
          </div>
        </section>
      </div>
      <Footer />
    </section>
  );
}