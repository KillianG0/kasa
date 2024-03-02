import { useParams } from 'react-router-dom';
import Data from '../Data/data.json'
import './tag.scss'
function Tag () {
    const { id } = useParams();
    const clickedLogement = Data.find(logement => logement.id === id); //Recherche l'id dans 'data'
    return (
        
        //On récupere grâce a map les tags associés en fonction du title de l'appartement
<div className="logements-tag">
            {clickedLogement.tags.map((title, index) => (
              <div className="tag-logement" key ={index} >{title}</div>
            ))}   </div> 

    )
}

export default Tag