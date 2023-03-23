import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { actionToken } from '../redux/actions/index';
import { login, verifyEmail } from "../back/login";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../back/register";

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [secName, setSecName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [erFirstName, setErFirstName] = useState('');
  const [erSecName, setErSecName] = useState('');
  const [erEmail, setErEmail] = useState('');
  const [erRPassword, setErRPassword] = useState('');
  const [erPassword, setErPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validateData = async () => {
    const logs = await verifyEmail(email);
    const vFirstName = firstName.length < 3;
    const vSecName = secName.length < 3;
    const validateEmail = /\S+@\S+\.\S+/;
    const vEmail = !email || !validateEmail.test(email) || email === '';
    const vEqPassword = password !== repeatPassword;
    const vPassword = password.length < 6;
    const vRPassword = password.length < 6;

    if(vFirstName) setErFirstName('Necessário inserir um nome com pelo menos três caracteres');
    else setErFirstName('');

    if(vSecName) setErSecName('Necessário inserir um nome com pelo menos três caracteres');
    else setErSecName('');

    if (logs) {
      setErEmail('Email já cadastrado na base de dados');
    } else {
      if (vEmail) setErEmail("Necessário inserir um E-mail válido");
      else setErEmail('');
    }

    if (vEqPassword) {
      setErPassword('Senhas inseridas não são semelhantes');
      setErRPassword('Senhas inseridas não são semelhantes');
    } else {
      if (vPassword) setErPassword("Necessário inserir uma senha com pelo menos 6 caracteres");
      else setErPassword('');
  
      if (vRPassword) setErRPassword("Necessário inserir uma senha com pelo menos 6 caracteres");
      else setErRPassword('');
    }

    return !(vFirstName || vSecName || vEmail || vEqPassword || vPassword ||vRPassword);
  };

  const register = async () => {
    const validation = await validateData();
    if (validation) {
      await registerUser(email, firstName, secName, password);
      const logs = await login(email, password);
      dispatch(actionToken(logs));
      navigate('/home');
    }
  }

  const errorMessage = (message) => {
    if (message !== '') {
      return (<div className="error-message-register">{message}</div>);
    } return <div className="space-between" />
  }

  return(
    <section>
      <div className="principal-div">
        <section className="section-login-register">
          <img
            src={require("../images/logos/wolf.png")}
            alt="icone de lobo"
            className="login-image"
          />
          <h1 className="title-page-login">
            Guia das Matilhas
          </h1>
          <div className="div-login">
            <input
              className={`admin-input-register ${erFirstName && 'admin-input-error'}`}
              value={firstName}
              placeholder="Primeiro nome"
              onChange={ (e) => setFirstName(e.target.value) }
              type="text"
            />
            { errorMessage(erFirstName) }
            <input
              className={`admin-input-register ${erSecName && 'admin-input-error'}`}
              value={secName}
              placeholder="Último nome"
              onChange={ (e) => setSecName(e.target.value) }
              type="text"
            />
            { errorMessage(erSecName) }
            <input
              className={`admin-input-register ${erEmail && 'admin-input-error'}`}
              value={email}
              placeholder="E-mail"
              onChange={ (e) => setEmail(e.target.value) }
              type="email"
            />
            { errorMessage(erEmail) }
            <input
              className={`admin-input-register ${erPassword && 'admin-input-error'}`}
              placeholder="Senha"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
              type="password"
            />
            { errorMessage(erPassword) }
            <input
              className={`admin-input-register ${erRPassword && 'admin-input-error'}`}
              placeholder="Repita a Senha"
              value={repeatPassword}
              onChange={ (e) => setRepeatPassword(e.target.value) }
              type="password"
            />
            { errorMessage(erRPassword) }
            <button
              className="admin-button-enable admin-button"
              id="btn-login-register"
              onKeyPress={ register }
              onClick={ register }
              >
              Registrar
            </button>
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