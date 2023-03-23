import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { actionLogout } from '../redux/actions';
import { useDispatch } from 'react-redux';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return(
    <header>
      <nav className="default">
        <Link className="item-menu" to='/'> Início </Link>
        <Link className="item-menu" to='/trybes' data-testid="menu-tribos"> Tribos </Link>
        <Link className="item-menu" to='/auspices'> Augúrios </Link>
        <Link className="item-menu" to='/breeds'> Raças </Link>
        <Link className="item-menu" to='/about'> Sobre </Link>
        <Link className="item-menu" to='/profile'> Perfil </Link>
        <button
          className="button-logout-nav"
          onClick={ () => {
            dispatch(actionLogout())
            navigate('/'); 
          }}
        >
          Sair
        </button>
      </nav>
      <div
        className="button-menu front2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className={`item ${showMenu ? 'item1-opened' : 'item1-closed'}`} />
        <div className={`item ${showMenu ? 'item2-opened' : 'item2-closed'}`} />
        <div className={`item ${showMenu ? 'item3-opened' : 'item3-closed'}`} />
      </div>
      {
        showMenu && <nav className={`${showMenu? 'front' : 'back'} mobile mobile-links`}>
          <Link
            to="/"
            className="item-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Início
          </Link>
          <Link
            to="/trybes"
            className="item-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Tribos
          </Link>
          <Link
            to="/auspices"
            className="item-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Augúrios
          </Link>
          <Link
            to="/breeds"
            className="item-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Raças
          </Link>
          <Link
            to="/about"
            className="item-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Sobre
          </Link>
          <Link
            to="/profile"
            className="item-menu"
            onClick={() => setShowMenu(!showMenu)}
          >
            Perfil
          </Link>
          <Link
            className="item-menu item-login"
            onClick={() => {
              dispatch(actionLogout())
              navigate('/'); 
              setShowMenu(!showMenu)}
            }
          >
            Sair
          </Link>
        </nav>
      }
    </header>
  );
}