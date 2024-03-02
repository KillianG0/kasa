
import { useState } from 'react';
import PropTypes from 'prop-types'; 
import down from '../assets/down.png';
import up from '../assets/up-arrow.png';
import './collapse.scss';

function Collapse({ name, data, description }) {       //Mets la collapse en fermer avec useState
    const [close, setClose] = useState(true);

    const handleClick = () => {                //Change l'état de la modale au click
        setClose((prevState) => !prevState);
    };

    return (
        <div className="collapse">
            <div className="collapse-titre">{name}
                <button onClick={handleClick}> {close ? <img src={up} alt="chevron-up" className='up' /> : <img src={down} alt="chevron-down" className='down' />} </button>
            </div>
            <div className={close ? "collapsefermer" : "collapsetext"}>
                {data ? <ul className="ul-equipments">{close ? "" : <>{data.map((equipment, index) => (<li key={index}>{equipment}</li>))}</>}</ul> : <p>{close ? "" : description}</p>}
            </div>
        </div>
    );
    //Si data est trouvé grace a map alors récupere equipments pour faire une li , si non défini alors prends le props description
}


Collapse.propTypes = {
    name: PropTypes.string.isRequired, 
    data: PropTypes.array, 
    description: PropTypes.string 
};

export default Collapse;