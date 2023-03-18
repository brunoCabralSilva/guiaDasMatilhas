import { useEffect } from "react";
import Footer from "../components/Footer";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <section>
      <div className="not-found">
        <p>Not Found</p>
        <img src={require("../images/logos/sad.png")} alt="sad wolf" />
      </div>
      <Footer />
    </section>
  );
}