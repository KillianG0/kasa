
import PropTypes from 'prop-types'; 
import starFull from '../../assets/starFull.png';
import starLight from '../../assets/starLight.png';
import './rate.scss';

function Rate({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating;
        const starImage = isFilled ? starFull : starLight;
        stars.push(<img key={i} src={starImage} alt={isFilled ? "Filled Star" : "Empty Star"} className="star" />);
    }

    return (
        <div className="rating">{stars}</div>
    );
}

Rate.propTypes = {
    rating: PropTypes.number.isRequired 
};

export default Rate;