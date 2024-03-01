
import { useState, useRef } from "react";
import PropTypes from "prop-types"; 

import left from '../../assets/arrow-left.png';
import right from '../../assets/arrow-right.png';
import './carrousel.scss';

function Slider ({data, total}) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === data.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? data.length - 1 : prevSlide - 1));
    };

    return (
        <div className="carrousel">
            {data.length > 1 && <button onClick={prevSlide} className="left-button"><img src={left} alt="Left" className="left" /></button>}
            {data.map((picture, index) => (
                <img 
                    src={picture} 
                    alt={`Slide ${index + 1}`} 
                    key={index}
                    ref={slideRef}
                    className={currentSlide === index ? "slide" : "slide slide-hidden"}
                />
            ))}
            {data.length > 1 && <button onClick={nextSlide} className="right-button"><img src={right} alt="Right" className="right" /></button>}
            {data.length > 1 && <span className="number">{currentSlide + 1}/{total}</span>}
        </div>
    );
}


Slider.propTypes = {
    data: PropTypes.array.isRequired, 
    total: PropTypes.number.isRequired 
};

export default Slider;