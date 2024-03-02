
import { useState,} from "react";
import PropTypes from "prop-types"; 

import left from '../../assets/arrow-left.png';
import right from '../../assets/arrow-right.png';
import './carrousel.scss';

function Slider ({data, total}) {
    const [currentSlide, setCurrentSlide] = useState(0); //Fonction pour mettre la slide a 0 donc au départ et la garder a 0 grâce a useState

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1)); //Fonction pour aller a la slide d'après
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1)); //Fonction pour retourner en arrière
    };

    return (
        <div className="carrousel">
            {data.length > 1 && <button onClick={prevSlide} className="left-button"><img src={left} alt="Left" className="left" /></button>}  
            {data.map((picture, index) => (
                <img 
                    src={picture} 
                    alt={`Slide ${index + 1}`} 
                    key={index}
                    className={currentSlide === index ? "slide" : "slide slide-hidden"}
                />
            ))}
            {data.length > 1 && <button onClick={nextSlide} className="right-button"><img src={right} alt="Right" className="right" /></button>}
            {data.length > 1 && <span className="number">{currentSlide + 1}/{total}</span>} 
        </div> //Si il y a plus d'une image , le nombre apparait pareil pour les fleches 
    );
}


Slider.propTypes = {
    data: PropTypes.array.isRequired, 
    total: PropTypes.number.isRequired 
};

export default Slider;