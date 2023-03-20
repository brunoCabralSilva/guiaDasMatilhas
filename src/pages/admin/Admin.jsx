import { useEffect, useState } from "react";
import Footer from "../../components/Footer";

export default function Admin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const enableButton = () => {
    const number = 6;
    const validateEmail = /\S+@\S+\.\S+/;
    const vEmail = !email || !validateEmail.test(email) || email === '';
    const vPassword = !password || password.length < number;
    return vEmail || vPassword;
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
            onChange={ (e) => setPassword(e.target.value) }
            type="password"
          />
          <button
            className={`${enableButton() ? 'admin-button-disabled' : 'admin-button-enable'} admin-button` }
            disabled={ enableButton() }
            onClick={() => {}}
          >
            Login
          </button>
        </div>
      </section>
      <Footer />
    </div>
  );
}