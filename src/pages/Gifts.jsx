import { useEffect, useState } from "react";
import FilterGifts from "../components/FilterGifts";
import Footer from "../components/Footer";
import TextFromGifts from '../components/TextFromGifts';
import { useDispatch, useSelector } from 'react-redux';
import { actionListGifts, actionResetFilters } from "../redux/actions";
import { getCollection } from "../back/querys";
import Gift from "../components/Gift";
import Navigation from "../components/Navigation";
import { useNavigate } from 'react-router-dom';

export default function Gifts() {
  const [listGifts, setListGifts] = useState([]);
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    const insertGifts = async () => {
      const listOfGifts = await getCollection('gifts');
      dispatch(actionListGifts(listOfGifts));
    }
    insertGifts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchGifts = async () => {
    const listOfGifts = globalState.listOfGifts;
    const listGenerics = globalState.filters.generics.length === 0;
    const listBooks = globalState.filters.books.length === 0;
    const listRanks = globalState.filters.ranks.length === 0;

    let filteredGenerics = [];

    if(!listGenerics) {
      for (let i = 0; i < globalState.filters.generics.length; i += 1) {
        for (let j = 0; j < listOfGifts.length; j += 1) {
          for (let k = 0; k < listOfGifts[j].belong.arrayValue.values.length; k += 1) {
            if(listOfGifts[j].belong.arrayValue.values[k].stringValue === globalState.filters.generics[i]) {
              filteredGenerics.push(listOfGifts[j]);
            }
          }
        }
      }
    } else {
      filteredGenerics = globalState.listOfGifts;
    }

    let filteredRanks = [];

    if(!listRanks) {
      for (let i = 0; i < globalState.filters.ranks.length; i += 1) {
        for (let j = 0; j < filteredGenerics.length; j += 1) {
          if(Number(filteredGenerics[j].rank.integerValue) === Number(globalState.filters.ranks[i])) {
            filteredRanks.push(filteredGenerics[j]);
          }
        }
      }
    } else {
      filteredRanks = filteredGenerics;
    }

    let filteredBooks = [];

    if (!listBooks) {
      for (let i = 0; i < globalState.filters.books.length; i += 1) {
        for (let j = 0; j < filteredRanks.length; j += 1) {
          for (let k = 0; k < filteredRanks[j].font.arrayValue.values.length; k += 1) {
            if(filteredRanks[j].font.arrayValue.values[k].stringValue === globalState.filters.books[i]) {
              filteredBooks.push(filteredRanks[j]);
            }
          }
        }
      }
    } else {
      filteredBooks = filteredRanks;
    }

    setListGifts(filteredBooks);
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
          className="admin-button-gift"
          // onClick={ () => setMinimize(!minimize) }
          >
          <h2 className="admin-button-title">Administrar Dons</h2>
        </button>
      );
    } else return '';
  };

  return(
    <section>
      <div className="title-carousel">
        <Navigation />
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
            listGifts.length > 0 && listGifts.map((item, index) => (
              <Gift item={ item } key={ index } />
            ))
          }
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}