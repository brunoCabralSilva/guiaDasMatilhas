import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const globalState = useSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <section>
      <Navigation />
      <div className="title-carousel">
        <h1 className="title">Profile</h1>
        <div className="div-profile">
          <p>
            <span className="title-description-profile">E-mail:</span>
            <span className="description-profile">{ globalState.user && globalState.user.email }</span>
          </p>
          <p>
            <span className="title-description-profile">Usuário:</span>
            <span className="description-profile">
              {
                globalState.user && 
                `${globalState.user.firstName} ${globalState.user.lastName}`
              }
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
}