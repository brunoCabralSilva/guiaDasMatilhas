import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { getById } from "../back/querys";

export default function Info() {
  const [data, setData] = useState({});
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    const getCollection = async () => {
      const { tipo, id } = params;
      const query = await getById(tipo, id);
      setData(query);
    }
    getCollection();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const returnByType = () => {
    switch(params.tipo) {
      case("tribos"):
        return (
          <div className="data-specific">
            <div className="info-details">
              <p>Totem: { data.totem && data.totem.stringValue }</p>
              <p>Força de Vontade Inicial: { data.fdv && data.fdv.integerValue }</p>
              <p>Situação da Tribo: { data.situation && data.situation.stringValue }</p>
              <p>Restrições de Antecedentes: { data.restriction && data.restriction.stringValue }</p>
            </div>
            <div className="presentation-img">
              {
                data.image &&
                  <img
                    src={require(`../images/${params.tipo}/${data.image.arrayValue.values[4].stringValue}`)}
                    className="info-image-white"
                    alt={data.name}
                  />
              }
            </div>
            <div className="info-description">
              { 
                data.description && data.description.arrayValue.values.map((desc) => (
                  <p>{ desc.stringValue }</p>
                ))
              }
            </div>
            <div className="data-div-img">
              {
                data.image &&
                  <img
                    src={require(`../images/${params.tipo}/${data.image.arrayValue.values[3].stringValue}`)}
                    className="info-image-glifo"
                    alt={data.name}
                  />
              }
            </div>
          </div>
        );
      case("augurios"):
        return (
          <div>
            { data.moon && data.moon.stringValue }
            { data.rage && data.rage.integerValue }
          </div>
        );
      default:
        return (
          <div>
            { data.gnose && data.gnose.integerValue }
          </div>
        );
    }
  };

  return(
    <div className="principal-div">
      <div className="info-element">
        <div className="info-data">
          <h1 className="title">
            { data.name && data.name.stringValue }
          </h1>
          { returnByType() }
        </div>
      </div>
      <Footer />
    </div>
  );
}