import { useEffect, useState } from 'react';
import { getCollection } from '../back/querys';
import { actionFilBook, actionFilGenerics, actionFilRank } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function FilterGifts({ type, dir }) {
  const [minimize, setMinimize] = useState(false);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

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
        const queryBooks = await getCollection('books');
        const sortedList = queryBooks.sort(function (x, y) {
          const a = x.name.stringValue;
          const b = y.name.stringValue;
          return a < b ? -1 : a > b ? 1 : 0;
        });
        setData(sortedList);
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
      dispatch(actionFilGenerics(item));
    } else if (dir === "Postos") {
      dispatch(actionFilRank(item));
    } else {
      dispatch(actionFilBook(item));
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
                  className="item-filter item-filter-not-selected"
                  onClick={ () => filterOptions(item.name.stringValue) }
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