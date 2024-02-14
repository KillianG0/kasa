

function Card ({ title, cover}) {
    return <div className="card">
            <img src={cover}></img>
            <h3>{title}</h3>
        </div>
}

export default Card