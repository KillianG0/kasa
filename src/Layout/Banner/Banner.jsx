import Banner from '../../assets/ImageHome.png';
import './Banner.scss';

//Banner de la page d'acceuil
function Banner1() {
    return (
      <div className='banner'>
          <h1> Chez vous,<br/> partout et ailleurs</h1>
          <img src={Banner}></img>        
      </div>
    )
  }
  
  export default Banner1
  
  
  