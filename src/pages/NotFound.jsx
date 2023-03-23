import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
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
      <div className="not-found">
        <p>Not Found</p>
        <img src={require("../images/logos/sad.png")} alt="sad wolf" className="sad-wolf" />
      </div>
      <Footer />
    </section>
  );
}