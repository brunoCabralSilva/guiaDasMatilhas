import { useState, useEffect } from "react";
import { getAuspices } from "../firebase/querys";

export default function Brreds() {
  const [listOfAuspices, setListOfAuspices] = useState([]);

  useEffect(() => {
    const query = async () => {
      const auspices = await getAuspices();
      setListOfAuspices(auspices);
    }
    query();
  }, []);

  console.log(listOfAuspices);

  return(
    <div>
      Auspices
    </div>
  );
}