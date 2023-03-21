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
          <div>
            { data.fdv && data.fdv.integerValue }
            { data.image1 && data.image1.stringValue }
            { data.image2 && data.image2.stringValue }
            { data.image3 && data.image3.stringValue }
            { data.image4 && data.image4.stringValue }
            { data.image5 && data.image5.stringValue }
            { data.name && data.name.stringValue }
            { data.situation && data.situation.stringValue }
          </div>
        );
      case("augurios"):
        return (
          <div>
            { data.image1 && data.image1.stringValue }
            { data.image2 && data.image2.stringValue }
            { data.image3 && data.image3.stringValue }
            { data.moon && data.moon.stringValue }
            { data.name && data.name.stringValue }
            { data.rage && data.rage.integerValue }
          </div>
        );
      default:
        return (
          <div>
            { data.image && data.image.stringValue }
            { data.gnose && data.gnose.integerValue }
            { data.name && data.name.stringValue }
          </div>
        );
    }
  };

  return(
    <div className="principal-div">
      <h1 className="title">
        { data.name && data.name.stringValue }
      </h1>
      { returnByType() }
      <Footer />
    </div>
  );
}