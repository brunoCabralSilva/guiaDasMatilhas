import ContactIcon from '../components/ContactIcon';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import Navigation from '../components/Navigation';

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return(
    <section>
    <div className="title-carousel">
      <Navigation />
      <h1 className="title">Sobre</h1>
      <section>
        <div className="about-data">
          <div
            className="about-us"
          >
            <img
              src={require('../images/logos/Garou Nordeste2.png')}
              alt="Garou Nordeste"
              className="about-img"
            />

            <div className="about-container">
              <h1 className="about-title">Garou Nordeste</h1>
              <div className="about-icons">
                <ContactIcon iconName="fa-instagram" link="https://www.instagram.com/garounordeste/" />
                <ContactIcon iconName="fa-spotify" link="https://open.spotify.com/show/7kal4LDO3ptHc3sG64btYI" />
                <ContactIcon iconName="fa-youtube" link="https://www.youtube.com/c/GarouNordeste" />
                <ContactIcon iconName="fa-facebook-f" link="https://www.facebook.com/garounordeste" />
              </div>
            </div>
            <div className="about-text" data-testid="about-garou-nordeste">
              <div className="about-just-text">
                <p className="pt-4">
                  O Garou Nordeste é um projeto que busca trazer toda a riqueza do Nordeste do Brasil ambientada para
                  "Lobisomem: O Apocalipse", cenário de RPG encontrado dentro do sistema WoD (Mundo das Trevas).
                </p>
                <p className="pt-4">Tudo começou quando três loucos, Bruno Gabryell, Felipe Brito e Jocélio Procópio, unidos por um
                  projeto
                  incrível chamado "Taverna Literária", decidiram investir em um novo projeto, totalmente voltado ao
                  nordeste e ao mundo dos Garou, para mostrar a todos do Brasil que há muito o que ser admirado em
                  nossa
                  região além de apenas fome, seca e pobreza.
                </p>
                <p className="pt-4">
                  Bruno Gabryell (Garou Nordeste) e Thiago Lucas (Matilha da Kombi) são os criadores deste site, sendo o primeiro o editor e o segundo o idealizador, revisor e tradutor!
                </p>
              </div>
              <div className="about-div-buttom">
                <button
                  type="button"
                  data-testid="button-garouNordeste"
                  onClick={() => navigate('/garou-nordeste')}
                  className="about-buttom">
                  Veja mais
                </button>
              </div>
            </div>
          </div>
          <div
            className="about-us-2"
          >
            <img src={require('../images/logos/kombi.jpg')} alt="Matilha da Kombi" className="about-img" />
            <div className="about-container">
              <h1 className="about-title">Matilha da Kombi</h1>
              <div className="about-icons">
                <ContactIcon iconName="fa-instagram" link="https://www.instagram.com/cronicas_da_kombi/" />
                <ContactIcon iconName="fa-facebook-f" link="https://www.facebook.com/cronicasdakombi" />
              </div>
            </div>
            <div className="about-text" data-testid="about-matilha-da-kombi">
              <div>
                <p className="pt-4">
                  A Matilha da Kombi, antes de qualquer coisa, sempre foi um grupo de amigos que se conheceu através do RPG. Surgiu em uma conversa despretensiosa no Facebook da Nação Garou, que em duas semanas virou uma mesa mensal e uma campanha marcante no Cenário de Lobisomem o Apocalipse, na Cidade de Niterói, no Rio de Janeiro. Diversos Garou já correram juntos dessa Matilha, mas ela começou com: Thiago Lucas, Rafael Trindade, Hanã Moreira, Diogo Linhares, Luiz "Caderninho" Vieira, Daniel Braga, Bruno De Biase, Marcus Laport e Rafael TrilhadoVento. Alguns ficaram pelo caminho, mas ainda ocupam seu espaço no memorial do nosso Caern - e quem sabe ainda voltem a correr conosco.
                </p>
                <p className="pt-4">
                  Conhecidos pela criatividade e pelo humor ácido, logo as piadas internas romperam as barreiras da nossa mesa e começaram a ocupar o Feed do Rage Across Brasil. Com textos autorais e diversos memes sobre todos os cenários de WoD, logo alçamos voo solo e começamos a página Crônicas da Kombi, no facebook e no instagram, valorizando o que há de melhor no RPG: a diversão.
                </p>
              </div>
              <div className="about-div-buttom">
                <button
                  type="button"
                  data-testid="button-kombi"
                  onClick={() => navigate('/matilha-da-kombi')}
                  className="about-buttom">
                  Veja mais
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </section>
  );
}