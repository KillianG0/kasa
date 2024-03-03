import { useParams } from 'react-router-dom'; //Récupere  dynamiquement les paramètres de l'URL donc le logement actuel 
import Data from '../../Data/data.json'
import './infoproprio.scss'
function Profil() {
    const { id } = useParams(); //Exrtait e l'identifiant du logement à partir des paramètres de l'URL
    const clickedLogement = Data.find(logement => logement.id === id); //Recherche l'id dans 'data' pour récuperer des données précises
  
  return (
    <div className='profil' >
        <p className="nom-proprio"> {clickedLogement.host.name}</p> 
        <img src={clickedLogement.host.picture} alt="" className="proprio-img"/> 
    </div>
  )
  //On récupère donc ici le nom et la photo du propriétaire 
}


export default Profil;