import { useState, useEffect } from "react";
import { getBreeds } from "../firebase/querys";

export default function Brreds() {
  const [listOfBreeds, setListOfBreeds] = useState([]);

  useEffect(() => {
    const query = async () => {
      const breeds = await getBreeds();
      setListOfBreeds(breeds);
    }
    query();
  }, []);

  console.log(listOfBreeds);

  return(
    <div>
      Breeds
    </div>
  );
}