import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCollection, getGiftByName, insertGift } from "../back/querys";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { queryDataValues } from "../redux/actions";
import { useNavigate } from 'react-router-dom';
import PopUpMessage from "../components/PopUpMessage";

export default function RegisterGift() {
  const [message, setMessage] = useState('');
  const [nameOriginal, setNameOriginal] = useState('');
  const [rank, setRank] = useState('');
  const [namePtBr, setNamePtBr] = useState('');
  const [textPtBr, setTextPtBr] = useState('');
  const [systemPtBr, setSystemPtBr] = useState('');
  const [note, setNote] = useState('');
  const [textOriginal, setTextOriginal] = useState('');
  const [systemOriginal, setSystemOriginal] = useState('');
  const [listBooks, setListBooks] = useState([]);
  const [belong, setBelong] = useState('');
  const [prerequisite, setPrerequisite] = useState('');
  const [listOfBelongs, setListOfBelongs] = useState([]);
  const [book, setBook] = useState('');
  const [page, setPage] = useState(0);
  const [edition, setEdition] = useState('');
  const [listOfFonts, setListOfFonts] = useState([]);
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (globalState.user.token === '') navigate('/login');
    if (globalState.user.role !== 'administrator') navigate('/gifts');
    if (globalState.listOfTrybes.length === 0) {
      queryDataValues(dispatch);
    }
    const query = async () => {
      const books = await getCollection('books');
      const listOfBooks = await books.map((book) => book.name.stringValue)
      setListBooks(listOfBooks);
    };
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addFont = () => {
    if(book === '') {
      setMessage({ text: 'Necessário escolher uma das opções de livro para cadastrar a Fonte', type:'error'});
    } else if (page <= 0) {
      setMessage({ text: 'Necessário inserir um valor para a página maior e diferente de zero para cadastrar a Fonte', type:'error'});
    } else if (edition === '') {
      setMessage({ text: 'Necessário escolher uma das edições oferecidas para cadastrar a Fonte', type:'error'});
    } else {
        setListOfFonts([
          ...listOfFonts,
          { 
            book,
            page,
            edition,
          }
        ]);
        setBook('');
        setPage(0);
        setEdition('');
    }
    const bookSelect = document.getElementById("book");
    bookSelect.selectedIndex = 0;
    const editionSelect = document.getElementById('edition');
    editionSelect.selectedIndex = 0;
  };

  const deleteFont = (fonts) => {
    const newList = listOfFonts.filter((f) => Number(fonts.page) !== Number(f.page) || fonts.book !== f.book || fonts.edition !== f.edition);
    setListOfFonts(newList);
  };

  const deleteBelong = (bel) => {
    const newList = listOfBelongs.filter((b) => bel !== b);
    setListOfBelongs(newList);
  };

  const addNewBelong = () => {
    if (belong === '') {
      setMessage({
        text: 'Necessário escolher uma das opções disponíveis para cadastrar uma nova referência de pertencimento',
        type: "error",
      });
    } else {
        setListOfBelongs([ ...listOfBelongs, { belong, prerequisite }]);
    }
    setBelong('');
    setPrerequisite('');
    const selectBelong = document.getElementById("selectBelong");
    selectBelong.selectedIndex = 0;
  };

  const verifyName = async () => {
    if (nameOriginal.length <=2) setMessage({ type: '', text: 'Necessário preencher um nome válido' });
    else {
      const query = await getGiftByName(nameOriginal);
      if(query._docs.length !== 0) setMessage({ type: 'error', text: 'Já existe um dom cadastrado com este nome' });
      else setMessage({ type: 'sucess', text: 'Dom disponível para cadastro' });
    }
  };

  const addGift = async () => {
    const query = await getGiftByName(nameOriginal);
    if (query._docs.length !== 0) {
      setMessage({ type: 'error', text: 'Dom já existe na base de dados original' });
    } else if (nameOriginal === '' || nameOriginal.length < 4) {
      setMessage({text: 'Necessário adicionar um nome em inglês para o Dom com pelo menos quatro caracteres', type: 'error' });
    } else if (namePtBr === '' || namePtBr.length < 4) {
      setMessage({type: 'error', text: 'Necessário adicionar um nome traduzido com pelo menos quatro caracteres para o dom' });
    } else if (rank === 0 || rank === '') {
      setMessage({ type: 'error', text: 'Necessário escolher um Posto' });
    } else if (listOfFonts.length === 0) {
      setMessage({ type: 'error', text: 'Necessário cadastrar um Livro como referência' });
    } else if (listOfBelongs.length === 0) {
      setMessage({ type: 'error', text: 'Necessário inserir a quem este dom pertence' });
    } else if (textPtBr.length <= 10 ) {
      setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Texto Traduzido"' });
    } else if (systemPtBr.length <= 10 ) {
      setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Sistema Traduzido"' });
    } else if (textOriginal.length <= 10 ) {
      setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Texto original"' });
    } else if (systemOriginal.length <= 10 ) {
      setMessage({type: 'error', text: 'Necessário inserir uma descrição maior para o campo "Sistema original"' });
    }
    else {
      const newGift = {
        nameOriginal,
        namePtBr,
        rank,
        listOfFonts,
        listOfBelongs,
        textPtBr,
        systemPtBr,
        note,
        textOriginal,
        systemOriginal,
        prerequisite,
      };

      try {
        await insertGift(newGift);
        setNameOriginal('')
        setNamePtBr('');
        setRank('');
        setListOfFonts([]);
        setListOfBelongs([]);
        setTextPtBr('');
        setSystemPtBr('');
        setNote('');
        setTextOriginal('');
        setSystemOriginal('');
        setPrerequisite('');
        const selectRank = document.getElementById("rank");
        selectRank.selectedIndex = 0;
        const selectBelong = document.getElementById("selectBelong");
        selectBelong.selectedIndex = 0;
        const editionSelect = document.getElementById('edition');
        editionSelect.selectedIndex = 0;
        setMessage({ type: 'sucess', text: 'Dom adicionado com sucesso!' })
      } catch(error) {
        setMessage(error);
    }
  }

  };

  return(
    <section>
      { 
        message !== '' && <PopUpMessage message={message} setMessage={setMessage} />
      }
      <Navigation />
      <div className="principal-div">
        <h1 className="title">Adicionar Dom</h1>
        <label
          htmlFor="nameOriginal"
          className="label-register-gift"
        >
          <span id="text-name-ptbr">Nome (Inglês):</span>
          <div className="div-verify-reg-gift">
            <input
              type="text"
              id="nameOriginal"
              value={nameOriginal}
              className="input-register-gift"
              onChange={ (e) => setNameOriginal(e.target.value) }
            />
            <button
              type="button"
              className="button-verify-register-gift"
              onClick={ verifyName }
            >
              Verificar
            </button>
          </div>
        </label>
        <label
          htmlFor="name"
          className="label-register-gift"
        >
          <span>Nome (Pt-Br):</span>
          <div className="div-verify-reg-gift">
          <input
            type="text"
            id="name"
            className="input-register-gift"
            value={ namePtBr }
            onChange={ (e) => setNamePtBr(e.target.value) }
          />
          </div>
        </label>
        <label
          htmlFor="rank"
          className="label-register-gift">
          <span className="">Posto:</span>
          <select
            id="rank"
            className="select-reg-gift"
            onChange={(e) =>setRank(e.target.value)}
          >
            <option disabled selected>Selecione um Posto</option>
            <option value={1}>Cliath (1)</option>
            <option value={2}>Fostern (2)</option>
            <option value={3}>Adren (3)</option>
            <option value={4}>Athro (4)</option>
            <option value={5}>Ancião (5)</option>
            <option value={6}>Lendário (6)</option>
          </select>
        </label>
        <div className="label-register-gift">
          <div>
            <label
                htmlFor="book"
                className="label-font-register-gift"
              >
                <span>Fonte:</span>
                <select
                  id="book"
                  className="select-reg-gift"
                  onChange={(e) => setBook(e.target.value)}
                >
                  <option disabled selected>Selecione um Livro</option>
                  {
                    listBooks && listBooks.sort(function (x, y) {
                      return x < y ? -1 : x > y ? 1 : 0;
                    }).map((book, index) => (
                      <option
                        key={ index }
                        className=""
                        value={ book }
                      >
                          { book }
                      </option>
                    ))
                  }
                </select>
            </label>
            <div className="div-edition-page">
              <label
                htmlFor="page"
                className="label-page-register-gift"
              >
              <span>Página:</span>
                <div className="">
                  <input
                    // className="input-register-gift"
                    type="number"
                    id="page"
                    value={page}
                    onChange={(e) => setPage(e.target.value)}
                  />
                </div>
              </label>
              <label
                htmlFor="edition"
                className="label-edit-register-gift"
              >
                <span>Edição:</span>
                <select
                  id="edition"
                  onChange={(e) => setEdition(e.target.value)}
                >
                  <option disabled selected>Selecione</option>
                  <option className="text-black" value="W20">W20</option>
                  <option className="text-black" value="Revisada">Revisada</option>
                  <option className="text-black" value="Segunda">Segunda</option>
                </select>
              </label>
            </div>
            <button
              type="button"
              className="button-verify-register-gift btn-font"
              onClick={() => addFont()}
            >
              Adicionar referência
            </button>
          </div>
          <div className="div-verify-reg-gift div-listfont-register">
            {
              listOfFonts && listOfFonts.map((fonts, index) => (
                <div key={index} className="belong-register-gift">
                  <div className="">
                    <p className="">
                      {' '}
                      { fonts.book }
                      {', '}
                      {'Pág. '}
                      { fonts.page }
                      {', '}
                      <span className="font-bold">
                        Edição:
                      </span>
                      {' '}
                      { fonts.edition }
                    </p>
                  </div>
                  <button
                    type="button"
                    className="button-verify-register-gift"
                    onClick={ () => deleteFont(fonts) }
                    >
                    Excluir
                  </button>
                </div>
              ))
            }
          </div>
        </div>
        <label
          htmlFor="belong"
          id="idBelong"
          className="label-register-gift"
        >
          <span>
            Pertencente a:
          </span>
          <div className="div-belong-reg-gift">
            <select
              id="selectBelong"
              className="select-reg-gift"
              onChange={(e) => setBelong(e.target.value)}
            >
              <option disabled value={0} selected>Selecione</option>
              <option disabled value={0}>Tribos</option>
              {
                globalState.listOfTrybes && globalState.listOfTrybes.sort(function (x, y) {
                  const a = x.name.stringValue;
                  const b = y.name.stringValue;
                  return a < b ? -1 : a > b ? 1 : 0;
                }).map((li, index) => (
                  <option key={ index } value={ li.name.stringValue }>{ li.name.stringValue }</option>
                ))
              }
              <option disabled value={0}>Raça</option>
              {
                globalState.listOfBreeds && globalState.listOfBreeds.sort(function (x, y) {
                  const a = x.name.stringValue;
                  const b = y.name.stringValue;
                  return a < b ? -1 : a > b ? 1 : 0;
                }).map((li, index) => (
                  <option key={ index } value={ li.name.stringValue }>{ li.name.stringValue }</option>
                ))
              }
              <option disabled value={0}>Augúrios</option>
              {
                globalState.listOfAuspices && globalState.listOfAuspices.sort(function (x, y) {
                  const a = x.name.stringValue;
                  const b = y.name.stringValue;
                  return a < b ? -1 : a > b ? 1 : 0;
                }).map((li, index) => (
                  <option key={ index } value={ li.name.stringValue }>{ li.name.stringValue }</option>
                ))
              }
            </select>
            <label
              htmlFor="prerequisite"
              className="label-register-gift"
            >
              <span id="text-name-ptbr">Pré-Requisito (campo):</span>
              <div className="div-verify-reg-gift">
                <input
                  type="text"
                  id="prerequisite"
                  value={prerequisite}
                  className="input-register-gift"
                  onChange={ (e) => setPrerequisite(e.target.value) }
                />
              </div>
            </label>
            <button
              type="button"
              className="button-verify-register-gift btn-font"
              onClick={() => addNewBelong()}
            >
              Adicionar referência
            </button>
          </div>
          <div className="div-verify-reg-gift">
            <div className="listbelongs-register-gift">
              {
                listOfBelongs && listOfBelongs.map((bel, index) => (
                  <div key={index} className="belong-register-gift">
                    <div>
                      { bel.belong }
                      {
                        bel.prerequisite !== '' &&
                        <span>
                          {' / '}
                          { bel.prerequisite }
                        </span>
                      }
                    </div>
                    <button
                      type="button"
                      className="button-verify-register-gift"
                      onClick={ () => deleteBelong(bel) }
                      >
                      Excluir
                    </button>
                  </div>
                ))
              }
            </div>
          </div>
        </label>
        <label htmlFor="textPtbr" className="label-register-gift">
          <span className="">Texto Traduzido:</span>
          <div className="div-verify-reg-gift">
            <textarea
              className="text-area-register-gift"
              id="textPtbr"
              value={textPtBr}
              onChange={ (e) => setTextPtBr(e.target.value) }
            />
          </div>
        </label>
        <label htmlFor="systemPtBr" className="label-register-gift">
          <span className="">Sistema Traduzido:</span>
          <div className="div-verify-reg-gift">
            <textarea
              className="text-area-register-gift"
              id="systemPtBr"
              value={systemPtBr}
              onChange={ (e) => setSystemPtBr(e.target.value) }
            />
            </div>
        </label>
        <label htmlFor="note" className="label-register-gift">
          <span className="">Nota adicional:</span>
          <div className="div-verify-reg-gift">
            <textarea
              className="text-area-register-gift"
              id="note"
              value={note}
              onChange={ (e) => setNote(e.target.value) }
            />
          </div>
        </label>
        <label
          htmlFor="TextOriginal"
          className="label-register-gift"
        >
          <span className="">Texto original:</span>
          <div className="div-verify-reg-gift">
            <textarea
              id="TextOriginal"
              className="text-area-register-gift"
              value={textOriginal}
              onChange={ (e) => setTextOriginal(e.target.value) }
            />
          </div>
        </label>
        <label
          htmlFor="systemOrig"
          className="label-register-gift"
        >
          <span className="">Sistema original:</span>
          <div className="div-verify-reg-gift">
            <textarea
              id="systemOrig"
              className="text-area-register-gift"
              value={systemOriginal}
              onChange={ (e) => setSystemOriginal(e.target.value) }
            />
          </div>
        </label>
        <label htmlFor="button-register-gift" className="label-register-gift">
          <button
            id="button-register-gift"
            type="button"
            className="button-verify-register-gift btn-font"
            onClick={() => addGift()}
          >
            Adicionar Dom
          </button>
        </label>
      </div>
      <Footer />
    </section>
  );
}
