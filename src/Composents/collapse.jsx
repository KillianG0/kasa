import { useState } from 'react';
import down from '../assets/down.png'
import up from '../assets/up-arrow.png'
import './collapse.scss'


function Collapse ({name, data, description}){
    const [close, setClose] = useState(true)
    const handleClick = () => {
        setClose((o) => !o)
    }
   
    return  <div className="collapse">
            <div className="collapse-titre">{name}
                <button onClick={handleClick}> {close ? <img src={up} alt="chevron-up" className='up' />:<img src={down} alt="chevron-down" className='down' />  } </button>
            </div>
            <div  className={close ? "collapsefermer" : "collapsetext" }>
               {data ? <ul className="ul-equipments">{close ? "" : <>{data.map((equipements) => (<li key={equipements}>{equipements}</li>))}</>}</ul> : <p>{ close ? "" : description}</p>}
            </div>
        </div>
        
}
export default Collapse;