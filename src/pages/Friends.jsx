import { useEffect } from "react";
import Construction from "../components/Construction";
import Footer from "../components/Footer";

export default function Friends() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className="principal-div">
      <h1 className="title">Parceiros</h1>
      <Construction />
      <Footer />
    </div>
  );
}