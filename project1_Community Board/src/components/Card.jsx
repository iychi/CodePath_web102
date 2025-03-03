import './Card.css';

function Card({ title, description, link, imgLink }) {
    const handleButtonClick = () => {
        window.open(link, '_blank');
    };

    return (
        <div className="card">
            <h3>{title}</h3>
            <img src = {imgLink} width="300" height="300"/>
            <p>{description}</p>
            <button className="uiverse-button" onClick={handleButtonClick}>
                Click here!
            </button>
        </div>
    );
}

export default Card;
