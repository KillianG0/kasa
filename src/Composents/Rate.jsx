
function Rate({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
        const isFilled = i <= rating;
        const star = isFilled ? "★" : "☆";
        stars.push(<span key={i} className="star">{star}</span>);
    }

    return (
        <div className="rating">{stars}</div>
    );
}

export default Rate;