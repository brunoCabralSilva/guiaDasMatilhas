import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { actionToken } from '../../redux/actions/index';
import { login } from "../../back/login";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.token.length === 13) {
      navigate('/admin');
    }
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
      dispatch(actionToken(logs.token));
      navigate('/admin');
    }
  };

  return(
    <div className="principal-div">
      <section className="section-login">
        <img
          src={require("../../images/logos/wolf.png")}
          alt="icone de lobo"
          className="login-image"
        />
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
          <button
            className={`${enableButton() ? 'admin-button-disabled' : 'admin-button-enable'} admin-button` }
            disabled={ enableButton() }
            onClick={ loginUser }
          >
            Login
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}