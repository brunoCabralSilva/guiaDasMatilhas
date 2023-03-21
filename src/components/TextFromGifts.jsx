export default function TextFromGifts() {
  return(
    <div>
      <div className="div-img-text">
        <img src={require('../images/wallpapers/002.jpg')} alt="Dois Garou em comunhão" className="gift-img-background" />
        <div className="div-background"/>
        <p className="text-gifts">
          O mundo espiritual divide muitos segredos com os lobisomens e outros metamorfos.
          De acordo com um antigo pacto, os espíritos ensinam habilidades mágicas chamadas Dons aos Garou. Os Dons permitem aos lobisomens concentrar uma energia espiritual para afetar a Tellurian. Tribos, augúrios e até mesmo raças diferentes aprendem Dons dinstintos.
        </p>
        <p className="text-gifts text-2">
          Cada Grupo tem seus próprios segredos e suas próprias e exclusivas ligações espirituais e, como consequência, existem muitos Dons espalhados ao longo de todos os livros que foram publicados, dificultando a busca ou tornando-a no mínimo massiva. Esta área foi criada para auxiliar esta oportunidade encontrada e aqui você pode pesquisar rapidamente por um ou mais dons que desejar.
        </p>
      </div>
      <div className="div-img-text">
        <img src={require('../images/wallpapers/touch.jpg')} alt="Dois Garou em comunhão" className="gift-img-background" />
        <div className="div-background"/>
        <h1 className="text-title">Como utilizar o filtro de busca</h1>
        <ul className="text-gifts">
          <li>
            Filtros de Raças, Tribos e Augúrios retornarão qualquer dom que inclua um dos selecionados:
          </li>
          <p>
            <strong>Exemplo</strong> - Ao selecionar raça hominídea e tribo dos roedores de ossos, a busca retornará qualquer dom que pertença aos hominídeos ou aos roedores de ossos, sem necessariamente precisar pertencer aos dois filtros selecionados;
          </p>
          <li>
            Filtros de posto e livro só retornarão os dons que tiverem os filtros selecionados:
          </li>
          <p>
            <strong>Exemplo</strong> - Se selecionar o posto fostern, só aparecerão dons que pertencerem ao posto fostern ou, ainda, se selecionar o livro W20, só aparecerão dons pertencentes ao W20;
          </p>
          <li>
            Mesclando as duas categorias de filtros acima citados, você pode achar qualquer dom que desejar:
          </li>
          <p>
            <strong>Exemplo</strong> - ao selecionar os filtros de augúrio Ahroun, tribo Wendigo e posto Ancião, serão retornados todos os dons de posto Ancião que pertençam ao augúrio Ahroun ou a tribo Wendigo;
          </p>
          <li>
            Ao selecionar algum filtro, o item selecionado aparecerá em um pop-up no canto inferior direito, onde você poderá acompanhar todos os filtros escolhidos e também removê-los caso deseje;
          </li>
          <li>
            Não selecionar nenhum filtro retornará uma lista com todos os dons.
          </li>
        </ul>
      </div>
    </div>
  );
}