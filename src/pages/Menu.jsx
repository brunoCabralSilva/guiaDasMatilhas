import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Menu() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const list = [
    {
      img: 'garou_nordeste.jpg',
      name: 'Garou Nordeste',
      link: '/garou-nordeste',
    },
    {
      img: 'kombi.jpg',
      name: 'Matilha da Kombi',
      link: '/matilha-da-kombi',
    },
    {
      img: 'https://media3.giphy.com/media/eGNpmOUeIIYUB4P4Al/giphy.gif?cid=790b76113d42c68657c63c771efd15378e71009f3ac51c5f&rid=giphy.gif&ct=g',
      name: 'Blog',
      link: '/page',
    },
    {
      img: 'https://64.media.tumblr.com/e3a999e989e0f17dac10be8b649707eb/af64a96270ae26f2-dd/s400x600/c1164ced59af1891c7c60ca70613a4d4643d0bb9.gifv',
      name: 'Dons',
      link: '/dons',
    },
    {
      img: 'https://www.icegif.com/wp-content/uploads/waterfall-icegif.gif',
      name: 'Admin',
      link: '/login',
    },
    {
      img: 'https://64.media.tumblr.com/4393e9e60edec4a6e821d5f14892a87a/af64a96270ae26f2-ea/s400x600/e8c3dae337ef0dadb718ac4718cac91631265f5b.gifv',
      name: 'Parceiros',
      link: '/parceiros',
    },
  ];

  return(
    <section>
      <div className="menu">
        <div
          className="menu-presentation"
        >
          <div className="black-color" />
          <img
            src={require('../images/logos/arrow-left.png')}
            alt="Seta para o retorno"
            className="arrow-left"
            onClick={ () => navigate('/') }
          />
          <div className="menu-text-presentation">
            <h3 className="z-20 sm:text-3xl font-bold">
              "Que Gaia tenha piedade de nós!"
            </h3>
            <h4 className="z-20 text-right pt-1 text-base sm:text-xl sm:font-bold">- Lobisomem: O Apocalipse (Ed. Revisada)</h4>
          </div>
        </div>
        <div className="menu-presentation-mobile">
          <div className="black-color" />
          <img
            src={require('../images/logos/arrow-left.png')}
            alt="Seta para o retorno"
            className="arrow-left"
            onClick={ () => navigate('/') }
          />
          <div className="div-imgs">
            <img
              src={require('../images/logos/Garou Nordeste.png')}
              alt="Logo do Garou Nordeste"
            />
            <img
              src={require('../images/logos/Crônicas da Kombi.png')}
              alt="Logo da Matilha da Kombi"
            />
          </div>
        </div>
        <div className="menu-grid">
          {
            list.map((nav, index) => (
              <Link to={nav.link }
                key={index}
                className="menu-grid-item"
              >
                { nav.name === 'Garou Nordeste' || nav.name === "Matilha da Kombi"
                ? 
                  <Link to={nav.link }>
                    <p> {nav.name} </p>
                  </Link>
                :
                  <Link to={nav.link}>
                    <p> {nav.name} </p>
                  </Link>
                  }
              </Link>
              ))
            }
        </div>
      </div>
      <Footer />
    </section>
  );
}