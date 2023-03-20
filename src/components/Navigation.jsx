import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  return(
    <header>
      <nav className="default">
        <Link className="item-menu" to='/'> Início </Link>
        <Link className="item-menu" to='/trybes' data-testid="menu-tribos"> Tribos </Link>
        <Link className="item-menu" to='/auspices'> Augúrios </Link>
        <Link className="item-menu" to='/breeds'> Raças </Link>
        <Link className="item-menu" to='/about'> Sobre </Link>
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
        </nav>
      }
    </header>
  );
}