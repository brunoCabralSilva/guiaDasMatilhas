import { useEffect } from "react";
import Construction from "../components/Construction";
import Footer from "../components/Footer";

export default function Gifts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className="principal-div">
      <h1 className="title">Dons</h1>
      <Construction />
      <Footer />
    </div>
  );
}