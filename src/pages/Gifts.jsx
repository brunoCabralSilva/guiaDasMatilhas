import { useEffect, useState } from "react";
import FilterGifts from "../components/FilterGifts";
import Footer from "../components/Footer";
import TextFromGifts from '../components/TextFromGifts';
import { useDispatch, useSelector } from 'react-redux';
import { actionResetFilters } from "../redux/actions";
import { getCollection } from "../back/querys";
import Gift from "../components/Gift";

export default function Gifts() {
  const [listGifts, setListGifts] = useState([]);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchGifts = async () => {
    const listBooks = globalState.filters.books.length === 0;
    const listGenerics = globalState.filters.generics.length === 0;
    const listRanks = globalState.filters.ranks.length === 0;



    if (listBooks && listGenerics && listRanks) {
      const listOfGifts = await getCollection('gifts');
      setListGifts(listOfGifts);
    }

    dispatch(actionResetFilters());
  };

  const returnMessageResult = () => {
    if (listGifts[0] === 'none') {
      return (
        <p className="result-gift-text">
          Nenhum Dom foi encontrado
        </p>
      );
    } 
    
    if (listGifts.length > 0) {
      return(
        <p className="result-gift-text">
          {listGifts.length} dons Encontrados
        </p>
      );
    }
    
    return null;
  }

  const analizeAdm = () => {
    if (globalState.token.length > 10 && globalState.role === 'administrator') {
      return (
        <button
          className="admin-button"
          // onClick={ () => setMinimize(!minimize) }
          >
          <h2 className="admin-button-title">Administrar Dons</h2>
        </button>
      );
    } else return '';
  };

  return(
    <div className="title-carousel">
      <h1 className="title">Dons</h1>
      <TextFromGifts />
      { analizeAdm() }
      <FilterGifts type="breeds" dir="racas" />
      <FilterGifts type="trybes" dir="tribos" />
      <FilterGifts type="auspices" dir="augurios" />
      <FilterGifts type="ranks" dir="Postos" />
      <FilterGifts type="books" dir="Livros" />
      <button
        className="search-button-gifts"
        onClick={ searchGifts }
      >
        Realizar Busca
      </button>
      <div>
        { returnMessageResult() }
        <div className="list-gifts">
        {
          listGifts.length > 0 && listGifts.map((item) => (
            <Gift item={item} />
          ))
        }
        </div>
        { 
        console.log(listGifts) }
      </div>
      <Footer />
    </div>
  );
}