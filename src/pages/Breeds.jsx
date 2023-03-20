import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { queryDataValues } from "../redux/actions";

export default function Breeds() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.listOfBreeds.length === 0) {
      queryDataValues(dispatch);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return(
    <div>
      <h1 className="title">Raças</h1>
      <Carousel
        list={ [...globalState.listOfBreeds, ...globalState.listOfBreeds] }
        dir="breeds"
      />
      <Footer />
    </div>
  );
}