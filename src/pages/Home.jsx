import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { queryDataValues } from "../redux/actions";
import Navigation from "../components/Navigation";

export default function Home() {
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    if (globalState.listOfTrybes.length === 0) {
      queryDataValues(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(globalState);

  return(
    <section>
      <Navigation />
      <header className="title-home">
        <h1 className="title-page">
          Guia das Matilhas
        </h1>
        <img
          src={require("../images/logos/arrow-down.png")}
          alt="seta para baixo"
          className="arrow-down"
          onClick={ () => navigate('/menu')}
        />
      </header>
      <Footer />
    </section>
  );
}