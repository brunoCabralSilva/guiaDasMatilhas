import { useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { getTrybes } from "../firebase/querys";

export default function Trybes() {
  const [listOfTrybes, setListOfTrybes] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = async () => {
      const trybes = await getTrybes();
      const filteredData = trybes.map((trybe) => {
        const dataValue = {
          name: trybe.name,
          image: trybe.image1,
        };
        return dataValue;
      })
      setListOfTrybes(filteredData);
    }
    query();
  }, []);

  return(
    <div>
      <h1 className="title">Tribos</h1>
      <Carousel
        list={ listOfTrybes }
        dir="trybes"
      />
      <Footer />
    </div>
  );
}