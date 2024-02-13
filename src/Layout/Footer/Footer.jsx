import LogoF from '../../assets/logo_footer.png'
import './Footer.scss'
const Footer = () => {
    return (
      <footer>
        <div className='footer'>
        <div className="logo-footer">
        <img src= {LogoF} alt="logo Kasa footer" />
        </div>
        <p className="rights">© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  };
  export default Footer;