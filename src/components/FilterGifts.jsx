import { useEffect, useState } from 'react';
import { getCollection } from '../back/querys';
import { actionFilBook, actionFilGenerics, actionFilRank } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function FilterGifts({ type, dir }) {
  const [minimize, setMinimize] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state);

  useEffect(() => {
    const query = async () => {
      if (dir === 'Postos') {
        setData([
          { name: { stringValue: 'Cliath' }, rank: 1},
          { name: { stringValue: 'Fostern' }, rank: 2},
          { name: { stringValue: 'Adren' }, rank: 3},
          { name: { stringValue: 'Athro' }, rank: 4},
          { name: { stringValue: 'Ancião' }, rank: 5}
        ]);
      } else if (dir === "Livros") {
        const listOfGifts = await getCollection('gifts');
        const queryBooks = [];
        for (let j = 0; j < listOfGifts.length; j += 1) {
          for (let i = 0; i < listOfGifts[j].font.arrayValue.values.length; i += 1) {
            if (queryBooks.includes(listOfGifts[j].font.arrayValue.values[i].stringValue)) {

            } else {
              queryBooks.push(listOfGifts[j].font.arrayValue.values[i].stringValue);
            }
          }
        }

        const queryBooksFormat = queryBooks.map((item) => ({ name: { stringValue: item }})).sort(function (x, y) {
          const a = x.name.stringValue;
          const b = y.name.stringValue;
          return a < b ? -1 : a > b ? 1 : 0;
        });

        setData(queryBooksFormat);

      } else {
        const queryItems = await getCollection(type);
        setData(queryItems);
      }
    };
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filterOptions = (item) => {
    if(dir === "tribos" || dir === "racas" || dir === "augurios") {
      dispatch(actionFilGenerics(item.name.stringValue));
    } else if (dir === "Postos") {
      dispatch(actionFilRank(item.rank));
    } else {
      dispatch(actionFilBook(item.name.stringValue));
    }
  };

  const returnName = () => {
    switch(dir) {
      case 'tribos':
        return 'Tribos';
      case 'racas':
        return 'Raças';
      case 'augurios':
        return 'Augúrios';
      default:
        return dir;
    }
  };

  const returnSelectedClass = (item) => {
    const list = [...globalState.filters.books, ...globalState.filters.generics, ...globalState.filters.ranks];
    if (list.includes(item)) {
      return 'item-filter-selected';
    } return 'item-filter-not-selected';
  };

  return(
    <section>
      <div
        className="filter"
        onClick={ () => setMinimize(!minimize) }
        >
        <h2 className="title-filter">{ returnName() }</h2>
        <div>
          {
            minimize
            ? <img
              alt="seta para cima"
              src={require('../images/logos/arrow-up.png')}
              className="filter-img"
            />
            : <img
              alt="seta para baixo"
              src={require('../images/logos/arrow-down.png')}
              className="filter-img"
            />
          }
        </div>
      </div>
      <div>
        <div
          className={
            minimize
              ? "list-filters"
              : "hidden-filters"}
        >
          <div className="grid-filters">
            {
              data.length > 0 && data.map((item, index) => (
                <div
                  key={index}
                  className={`item-filter ${returnSelectedClass(item.name.stringValue)}`}
                  onClick={ () => filterOptions(item) }
                >
                  {
                  (dir === 'tribos' || dir === 'racas' || dir === 'augurios') && item.image ?
                   <img
                    src={require(`../images/${dir}/${ dir === 'tribos' ? item.image.arrayValue.values[3].stringValue : item.image.arrayValue.values[0].stringValue}`)}
                    alt={data.name && data.name.stringValue}
                    className="image-filter"
                    />
                    : ''  
                  }
                  <p>{ item.name && item.name.stringValue }</p>
                </div>  
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}