import { useEffect } from "react";
import Construction from "../components/Construction";
import Footer from "../components/Footer";

export default function Rituals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <section>
      <div className="not-found">
        <Construction />
      </div>
      <Footer />
    </section>
  );
}