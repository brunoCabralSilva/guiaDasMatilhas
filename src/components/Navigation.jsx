import { Link } from 'react-router-dom';

export default function Navigation() {
  return(
    <nav>
      <Link className="item-menu" to='/'> Início </Link>
      <Link className="item-menu" to='/trybes'> Tribos </Link>
      <Link className="item-menu" to='/auspices'> Augúrios </Link>
      <Link className="item-menu" to='/breeds'> Raças </Link>
      <Link className="item-menu" to='/about'> Quem Somos </Link>
    </nav>
  );
}