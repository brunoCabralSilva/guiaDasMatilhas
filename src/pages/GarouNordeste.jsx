import { useEffect } from "react";
import Construction from "../components/Construction";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function GarouNordeste() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <section>
      <Navigation />
      <div className="principal-div">
        <h1 className="title">Garou Nordeste</h1>
        <Construction />
      </div>
      <Footer />
    </section>
  );
}