import { Link } from 'react-router-dom'
import Data from '../../Data/data.json'
import Card from '../Cards.jsx'
import './Cardlist.scss'


function CardsList () {
    return  <div className='liste-logement'>
                {Data.map(({id, title, cover}) => (
                    <Link key={id} to={`../Logements/${id}`} className='carte'>
                        <Card 
                            key = {id}
                            title = {title}
                            cover = {cover}
                        />
                    </Link>
                ))}    
        </div>
}

export default CardsList