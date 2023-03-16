import { useState, useEffect } from "react";
import { getTrybes } from "../firebase/querys";

export default function Trybes() {
  const [listOfTrybes, setListOfTrybes] = useState([]);

  useEffect(() => {
    const query = async () => {
      const trybes = await getTrybes();
      setListOfTrybes(trybes);
    }
    query();
  }, []);

  console.log(listOfTrybes);

  return(
    <div>
      Trybes
    </div>
  );
}