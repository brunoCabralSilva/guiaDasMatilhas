import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { getBreeds } from "../firebase/querys";

export default function Breeds() {
  const [listOfBreeds, setListOfBreeds] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = async () => {
      const breeds = await getBreeds();
      setListOfBreeds(breeds);
    }
    query();
  }, []);

  return(
    <div>
      <h1 className="title">Raças</h1>
      <Carousel
        list={ [...listOfBreeds, ...listOfBreeds] }
        dir="breeds"
      />
      <Footer />
    </div>
  );
}