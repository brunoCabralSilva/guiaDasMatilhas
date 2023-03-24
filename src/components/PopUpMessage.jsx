import { useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { BsCheckAll } from "react-icons/bs";

export default function PopUpMessage({ message, setMessage }) {

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return(
    <div
      className={`${message.text === '' ? 'hidden': 'flex'} primary-div-pop-up`}
      onClick={ () => setMessage({ text: '', type: '' }) }
    >
      <div className="secondary-div-pop-up"
      onClick={(e) => {
        e.stopPropagation();
      }}
      >
        <img
          src={require('../images/wallpapers/001.jpg')} 
          alt="wallpaper" 
          className="img-pop-up"
        />
        {
          message.type === 'error' && <BiError className="pop-up-check" />
        }
        {
          message.type === 'sucess' && <BsCheckAll className="pop-up-check" />
        }
        <div className="pop-up-message">
          {message.text}
        </div>
        <button
          type="button"
          className="button-close-pop-up"
          onClick={ () => setMessage({ text: '', type: '' }) }
        >
          <AiFillCloseCircle className="pop-up-close" />
        </button>
      </div>
    </div>
  );
}