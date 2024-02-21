import { useParams } from 'react-router-dom';
import Data from '../../Data/data.json'
import './infoproprio.scss'
function Profil() {
    const { id } = useParams();
    const clickedLogement = Data.find(logement => logement.id === id);

  return (
    <div className='profil' >
        <p className="nom-proprio"> {clickedLogement.host.name}</p>
        <img src={clickedLogement.host.picture} alt="" className="proprio-img"/>
    </div>
  )
}

export default Profil;