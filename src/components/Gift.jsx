import { useState } from "react";

export default function Gift({ item }) {
  const [showDescription, setShowDescription] = useState(false);

  // const firstLetterUpper = (nome) => {
  //   let novoNome = nome[0].toUpperCase();
  //   for (let i = 1; i < nome.length; i += 1) {
  //     novoNome += nome[i];
  //   }
  //   return novoNome;
  // }

  return(
    <section 
      className={ showDescription ? 'w-full' : 'w-50'}
    >
      {/* {
        this.state.popup && 
        <PopUpDelete
          name={nameOriginal}
          setPopup={ this.setPopup }
        />
      } */}
      <div className="gift-div">
        <div
          className='title-gift'
          onClick={() => {
            setShowDescription(!showDescription)
          }}
        >
          <div
            // className={ showDescription ? 'w-full' : 'w-50'}
            // onClick={() => {
            //   if(!showData) {
            //     this.enableDisableGift()
            //   } 
            // }}
          >
            <strong>
              {item.namePtBr && item.namePtBr.stringValue}
              {' ('}
              {item.nameOriginal && item.nameOriginal.stringValue}
              {') '}
              - Posto {item.rank && item.rank.integerValue}
            </strong>
          </div>
          {
            showDescription
            ? <img
              alt="baixo"
              src={require('../images/logos/arrow-up.png')}
              className="img-arrow-gift"
            />
            : <img
              alt="seta para cima"
              src={require('../images/logos/arrow-down.png')}
              className="img-arrow-gift"
            />
          }
        </div>
        { showDescription && <hr className="solid" /> }
        { showDescription &&
          <div>
            <div className="data-gift"><strong>Fonte:</strong>
              {
                item.font && item.font.arrayValue.values.map((f, index) => (
                  <div key={index}>
                    <span>{ f.stringValue }</span>
                    <span>{ 
                        index === item.font.arrayValue.values.length -1 ? "." : ',' 
                      }
                    </span>
                  </div>
                ))
              }
            </div>
            <div className="data-gift">
              <p><strong>Pertencente a: </strong></p>
              {
                item.belong && item.belong.arrayValue.values.map((bel, index) => (
                  <div key={index}>
                    <span>{ bel.stringValue }</span>
                    <span>{ 
                        index === item.belong.arrayValue.values.length -1 ? "." : ',' 
                      }
                    </span>
                  </div>
                ))
              }
              </div>
            <div className="data-gift"><strong>Pré-Requisito: </strong>
            {/* { arraysubtypes } */}
            </div>
            <div className="data-gift"><strong>Descrição: </strong></div>
            <div className="data-gift">
              { item.textPtBr && item.textPtBr.stringValue }
            </div>
            <div className="data-gift"><strong>Sistema:</strong></div>
            <div className="data-gift">
              { item.systemPtBr && item.systemPtBr.stringValue }
            </div>
            {
              item.note && item.note.stringValue !== '' &&
              <div>
                <div className="data-gift"><strong>Nota:</strong></div>
                {/* { 
                  edit
                  ? <textarea className="text-black w-full" value={item.note.stringValue} onChange={(e) => this.setState({ note: e.target.value })} /> */}
                  :
                  <div className="data-gift">{ item.note.stringValue }</div>
                {/* } */}
              </div>
            }
            <div className="data-gift"><strong>Description:</strong></div>
            <div className="data-gift">{ item.textOriginal && item.textOriginal.stringValue }</div>
            <div className="data-gift"><strong>System:</strong></div>
            <div className="data-gift">{ item.systemOriginal && item.systemOriginal.stringValue }</div>
            {/* {
              date && 
              <div>
                <div className="my-2">
                  <strong>Atualizado pela última vez em</strong>
                  <span>{' '}</span>
                  {date}
                  <span>{' '}</span>
                  <span>por {user}</span>
                </div>
              </div>
            } */}
            {/* {
              admin &&
              <div className="mt-6">
                <button
                  className="bg-black mr-1 p-3 border-2 border-gray-600 hover:border-white transition duration-500"
                  onClick={ () => {
                    this.editGift();
                    this.context.setShowPopUpIfGiftExists(false);
                  }}
                >
                    Editar
                </button>
                <button
                  className="bg-black ml-2 p-3 border-2 border-gray-600 hover:border-white transition duration-500"
                  onClick={ () => this.setPopup(true) }
                >
                  Excluir
                </button>
              </div>
            } */}
          </div>
        }
      </div>
    </section>
  );
}