import { useEffect } from "react";
import { useSelector } from "react-redux";
import Construction from "../components/Construction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const globalState = useSelector((state) => state);
  const navigate = useNavigate();
  console.log('global', globalState);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <section>
      <Navigation />
      <div className="principal-div">
        <h1 className="title">Profile</h1>
        <div>
          <p>
            <span>E-mail:</span>
            <span>{ globalState.user && globalState.user.email }</span>
          </p>
          <p>
            <span>Usuário:</span>
            {
              globalState.user && 
              `${globalState.user.firstName} ${globalState.user.lastName}`
            }
          </p>
        </div>
        <Construction />
      </div>
      <Footer />
    </section>
  );
}