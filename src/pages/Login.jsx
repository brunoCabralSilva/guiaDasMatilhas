import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { actionToken } from '../redux/actions/index';
import { login } from "../back/login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorAuth, setErrorAuth] = useState(false);
  const globalState = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token !== '') navigate('/home');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const enableButton = () => {
    const number = 6;
    const validateEmail = /\S+@\S+\.\S+/;
    const vEmail = !email || !validateEmail.test(email) || email === '';
    const vPassword = !password || password.length < number;
    return vEmail || vPassword;
  };

  const loginUser = async () => {
    const logs = await login(email, password);
    if (logs) {
      dispatch(actionToken(logs));
      navigate('/home');
    } else {
      setErrorAuth(true);
      setTimeout(() => {
        setErrorAuth(false);
      }, 3000);
    }
  };

  return(
    <section>
      <div className="principal-div">
        <section className="section-login">
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
              className="admin-input"
              value={email}
              placeholder="E-mail"
              onChange={ (e) => setEmail(e.target.value) }
              type="email"
            />
            <input
              className="admin-input"
              placeholder="Password"
              value={password}
              onChange={ (e) => setPassword(e.target.value) }
              type="password"
            />
            {
              document.addEventListener('keydown', function(e) {
                if(e.key === "Enter"){
                  document.getElementById("btn-login").click();
                }
              })
            }
            <button
              className={`${enableButton() ? 'admin-button-disabled' : 'admin-button-enable'} admin-button` }
              id="btn-login"
              onKeyPress={loginUser}
              disabled={ enableButton() }
              onClick={ loginUser }
            >
              Login
            </button>
            <button
              className="admin-button-enable admin-button"
              id="btn-register"
              onClick={ () => navigate('/register') }
            >
              Registre-se
            </button>
          </div>
          { errorAuth 
              ? <div className="error-message">Email ou senha incorretos</div>
              : <div className="error-message" /> 
          }
        </section>
      </div>
      <Footer />
    </section>
  );
}