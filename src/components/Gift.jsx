import { useState } from "react";

export default function Gift({ item }) {
  const [showDescription, setShowDescription] = useState(false);
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
          <div>
            <strong>
              {item.namePtBr && item.namePtBr.stringValue}
              {' ('}
              {item.nameOriginal && item.nameOriginal.stringValue}
              {') '}
              - Posto {item.rank && item.rank.stringValue}
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
              <span>{ ' ' }</span>
              {
                item.font && item.font.arrayValue.values.map((f, index) => (
                  <div key={index}>
                    <span>{ f.mapValue.fields.book.stringValue }</span>
                    <span>{ ', ' }</span>
                    <span>pág.{ f.mapValue.fields.page.stringValue }</span>
                    <span>{ ', ' }</span>
                    <span>Edição: { f.mapValue.fields.edition.stringValue }</span>
                  </div>
                ))
              }
            </div>
            <div className="data-gift">
              <strong>Pertencente a: </strong>
              {
                item.belong && item.belong.arrayValue.values.map((bel, index) => (
                  <span key={index}>
                    <span>{ bel.mapValue.fields.belong.stringValue }</span>
                    {
                      bel.mapValue.fields.prerequisite.stringValue !== '' && 
                      <span>
                        {' ( '}
                        { bel.mapValue.fields.prerequisite.stringValue }
                        {' )'}
                      </span>
                    }
                    
                    <span>{ 
                        index === item.belong.arrayValue.values.length -1 ? "." : ',' 
                      }
                    </span>
                    <span>{ ' ' }</span>
                  </span>
                ))
              }
              </div>
              {
                item.prerequisites && item.prerequisites.stringValue !== '' &&
                <div className="data-gift"><strong>Pré-Requisito: </strong>
                { item.prerequisites }
                </div>
              }
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
                <div className="data-gift">
                  <strong>Nota:</strong>
                </div>
                <div className="data-gift">
                  { item.note.stringValue }
                </div>
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