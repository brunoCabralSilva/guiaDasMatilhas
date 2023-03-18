import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { getAuspices } from "../firebase/querys";

export default function Auspices() {
  const [listOfAuspices, setListOfAuspices] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = async () => {
      const auspices = await getAuspices();
      const filteredData = auspices.map((auspices) => {
        const dataValue = {
          name: auspices.name,
          image: auspices.image1,
        };
        return dataValue;
      })
      setListOfAuspices(filteredData);
    }
    query();
  }, []);

  return(
    <div>
      <h1 className="title">Augúrios</h1>
      <Carousel
        list={ [...listOfAuspices, ...listOfAuspices] }
        dir="auspices"
      />
      <Footer />
    </div>
  );
}