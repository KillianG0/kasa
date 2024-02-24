import './Header.scss'
import Logo from '../../assets/logo-header.png'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <div className='navbar'>
      <NavLink to="/">
        <img src={Logo} alt="logo Kasa" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Accueil</NavLink>
        </li>
        <li>
          <NavLink to="/About">A propos</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;