export default function Footer() {
  return(
    <footer>
        <div>
          <img
            src={require('../images/logos/Garou Nordeste.png')}
            alt="Logo do Garou Nordeste"
            className="footer-image"
          />
          <img
            src={require('../images/logos/Crônicas da Kombi.png')}
            alt="Logo da Matilha da Kombi"
            className="footer-image"
          />
        </div>
        <div>
          <p>
            © 2023 Copyright - Bruno Gabryell Cabral da Silva & Thiago Lucas Martins da Silva
          </p>
        </div>
      </footer>
  );
}