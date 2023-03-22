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

  const returnFont = () => {
    switch(params.tipo){
      case 'tribos':
        return (
          <a
            href="https://livrodosespelhos.com/as-tribos-de-lobisomem-o-apocalipse/"
            target="_blank"
            rel="noreferrer"
            className="link-reference"
          >
            https://livrodosespelhos.com/as-tribos-de-lobisomem-o-apocalipse/
        </a>
        );
      case 'augurios':
        return (
          <a
            href="https://movimentorpg.com.br/sob-as-bencaos-de-luna/"
            target="_blank"
            rel="noreferrer"
            className="link-reference"
          >
            https://movimentorpg.com.br/sob-as-bencaos-de-luna/
        </a>
        );
      default:
        return (
          <span>Lobisomem: O Apocalipse - Guia do Jogador Ed.Revisada</span>
        );
    }
  };

  const returnInitialImage = () => {
    switch(params.tipo){
      case("tribos"):
        return (
        <img
          src={require(`../images/${params.tipo}/${data.image.arrayValue.values[4].stringValue}`)}
          className="info-image-white"
          alt={data.name}
        />);
      default:
        return (
          <img
            src={require(`../images/${params.tipo}/${data.image.arrayValue.values[0].stringValue}`)}
            className="info-image-auspices-breeds"
            alt={data.name}
          />
        );
    }
  };

  const returnDataByType = () => {
    switch(params.tipo) {
      case("tribos"):
        return (
          <div className="info-details">
            <p>Totem: { data.totem && data.totem.stringValue }</p>
            <p>Força de Vontade Inicial: { data.fdv && data.fdv.integerValue }</p>
            <p>Situação da Tribo: { data.situation && data.situation.stringValue }</p>
            <p>Restrições de Antecedentes: { data.restriction && data.restriction.stringValue }</p>
          </div>
        );
      case("augurios"):
        return (
          <div className="info-details">
            <p>Lua relacionada: { data.moon && data.moon.stringValue }</p>
            <p>Fúria Inicial: { data.rage && data.rage.integerValue }</p>
          </div>
        );
      default:
        return (
          <div className="info-details">
            <p>Gnose Inicial: { data.gnose && data.gnose.integerValue }</p>
          </div>
        );
    }
  };

  return(
    <div className="title-carousel">
      <div className="info-element">
        <div className="info-data">
          <h1 className="title-info">
            { data.name && data.name.stringValue }
          </h1>
          <div className="data-specific">
            { returnDataByType() }
            <div className="presentation-img">
              { data.image && returnInitialImage() }
            </div>
            <div className="info-description">
              { 
                data.description && data.description.arrayValue.values.map((desc, index) => (
                  <p key={index}>{ desc.stringValue }</p>
                ))
              }
              <div>
                <span className="font-text">Fonte:</span>
                { returnFont() }
              </div>
            </div>
            {
              data.image && params.tipo === "tribos" &&
              <div className="data-div-img">
                <img
                  src={require(`../images/${params.tipo}/${data.image.arrayValue.values[3].stringValue}`)}
                  className="info-image-glifo"
                  alt={data.name}
                />
              </div>
            }
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}