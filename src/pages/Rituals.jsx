import { useEffect } from "react";
import Construction from "../components/Construction";
import Footer from "../components/Footer";

export default function Rituals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <div className="principal-div">
      <h1 className="title">Rituais</h1>
      <Construction />
      <Footer />
    </div>
  );
}

// import { useEffect } from "react";
// import Construction from "../components/Construction";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Footer from "../components/Footer";

// export default function Rituals() {
//   const globalState = useSelector((state) => state);
//   const navigate = useNavigate();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     console.log(globalState.token);
//     if (globalState.token === '') {
//       navigate('/login');
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   return(
//     <div className="principal-div">
//       <h1 className="title">Menu Adm</h1>
//       <Construction />
//       <Footer />
//     </div>
//   );
// }