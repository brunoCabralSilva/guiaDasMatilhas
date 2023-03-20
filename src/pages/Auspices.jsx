import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { queryDataValues } from "../redux/actions";

export default function Auspices() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.listOfAuspices.length === 0) {
      queryDataValues(dispatch);
    }
  }, []);

  return(
    <div>
      <h1 className="title">Augúrios</h1>
      <Carousel
        list={ [...globalState.listOfAuspices, ...globalState.listOfAuspices] }
        dir="auspices"
      />
      <Footer />
    </div>
  );
}