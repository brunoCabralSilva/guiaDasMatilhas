import { useEffect } from "react";
import Construction from "../components/Construction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

export default function Blog() {
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
      <div className="principal-div">
        <h1 className="title">Blog</h1>
        <Construction />
      </div>
      <Footer />
    </section>
  );
}