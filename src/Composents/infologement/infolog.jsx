import { useParams } from 'react-router-dom'; //Récupere les paramètres de l'URL donc le logement actuel 
import Data from '../../Data/data.json'
import './infolog.scss'
function Info() {
    const { id } = useParams(); //Exrtait e l'identifiant du logement à partir des paramètres de l'URL

    const clickedLogement = Data.find((logement) => logement.id === id); //Recherche l'id dans 'data' pour récuperer des données précises
  
    
  return (
    <div className="info-logement">
            <h1 className="logement-titre">{clickedLogement.title}</h1>
            <p>{clickedLogement.location}</p>
            </div>
  )
  //On récupère ici le nom et le lieu de l'appartement 
}


export default Info;