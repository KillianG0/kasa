
import PropTypes from 'prop-types'; 

function Card({ title, cover }) {
    return (                                    //On crée donc la card avec l'image et titre de l'appartement
        <div className="card">
            <img src={cover} alt="Card Cover"/>
            <h3>{title}</h3>
        </div>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired, 
    cover: PropTypes.string.isRequired 
};

export default Card;