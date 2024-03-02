
import PropTypes from 'prop-types'; 
import starFull from '../../assets/starFull.png';
import starLight from '../../assets/starLight.png';
import './rate.scss';

function Rate({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {          //Création d'une boucle pour toujoursa affiché 5*
        const isFilled = i <= rating;      //Si le rating est inferieur ou égale
        const starImage = isFilled ? starFull : starLight; //Si c'est le cas l'étoile est pleine ou vide
        stars.push(<img key={i} src={starImage} alt={isFilled ? "Filled Star" : "Empty Star"} className="star" />); //crée une img pour chaque étoile en fonction du rating
    }

    return (
        <div className="rating">{stars}</div> //renvoi les img dans le conteneur 
    );
}

Rate.propTypes = {
    rating: PropTypes.number.isRequired 
};

export default Rate;