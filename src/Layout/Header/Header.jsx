import './Header.scss'
import Logo from '../../assets/logo-header.png'

function Header () {
return (
    <div className='navbar'>
    <img src={Logo}></img>
    <ul>
           <li>Accueil</li>
           <li>A propos</li>
       </ul>
   </div>
 )
}

export default Header