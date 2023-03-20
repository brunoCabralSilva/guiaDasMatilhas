import { useEffect } from "react";
import Construction from "../../components/Construction";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

export default function Admin() {
  const globalState = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.token.length !== 13) {
      navigate('/login');
    }
  }, []);
  return(
    <div className="principal-div">
      <h1 className="title">Menu Adm</h1>
      <Construction />
      { console.log(globalState) }
      <Footer />
    </div>
  );
}