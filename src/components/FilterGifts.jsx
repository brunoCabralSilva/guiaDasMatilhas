import { useEffect, useState } from 'react';
import { getCollection } from '../back/querys';

export default function FilterGifts({ type, dir }) {
  const [minimize, setMinimize] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const query = async () => {
      const queryItems = await getCollection(type);
      setData(queryItems);
    };
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnName = () => {
    switch(dir) {
      case 'tribos':
        return 'Tribos';
      case 'racas':
        return 'Raças';
      case 'augurios':
        return 'Augúrios';
      default:
        return "Null";
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
                <div key={index} className="item-filter item-filter-not-selected">
                  {
                  item.image && <img
                    src={require(`../images/${dir}/${ dir === 'tribos' ? item.image.arrayValue.values[3].stringValue : item.image.arrayValue.values[0].stringValue}`)}
                    alt={data.name}
                    className="image-filter"
                  />
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