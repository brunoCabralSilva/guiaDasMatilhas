import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import { getBreeds } from "../firebase/querys";

export default function Breeds() {
  const [listOfBreeds, setListOfBreeds] = useState([]);

  useEffect(() => {
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
    </div>
  );
}