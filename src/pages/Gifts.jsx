import { useEffect } from "react";
import FilterGifts from "../components/FilterGifts";
import Footer from "../components/Footer";
import TextFromGifts from '../components/TextFromGifts';
import { useDispatch, useSelector } from 'react-redux';
import { actionResetFilters } from "../redux/actions";

export default function Gifts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const searchGift = () => {
    console.log(globalState.filters);
    dispatch(actionResetFilters());
  };

  return(
    <div className="title-carousel">
      <h1 className="title">Dons</h1>
      <TextFromGifts />
      <FilterGifts type="breeds" dir="racas" />
      <FilterGifts type="trybes" dir="tribos" />
      <FilterGifts type="auspices" dir="augurios" />
      <FilterGifts type="ranks" dir="Postos" />
      <FilterGifts type="books" dir="Livros" />
      <button
        className="search-button-gifts"
        onClick={ searchGift }
      >
        Realizar Busca
      </button>
      <Footer />
    </div>
  );
}