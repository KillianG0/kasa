import { useParams } from 'react-router-dom';
import Data from '../../Data/data.json'
import './infolog.scss'
function Info() {
    const { id } = useParams();

    const clickedLogement = Data.find((logement) => logement.id === id);
  
    
  return (
    <div className="info-logement">
            <h1 className="logement-titre">{clickedLogement.title}</h1>
            <p>{clickedLogement.location}</p>
            </div>
  )
}

export default Info;