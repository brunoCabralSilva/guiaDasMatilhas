import { useEffect } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <section>
      <Navigation />
      <div className="not-found">
        <p>Not Found</p>
        <img src={require("../images/logos/sad.png")} alt="sad wolf" />
      </div>
      <Footer />
    </section>
  );
}