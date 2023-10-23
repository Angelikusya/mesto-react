function Card({card, name, likes, link, onCardClick }) {
    function handleClick() {
        onCardClick(card)
    }
    return (
        <div className="element-template" id="element-template">
            <article className="element">
                <button 
                    type="button"
                    className="element__trash">
                </button> 
                <div 
                    className="element__image" 
                    onClick={handleClick} 
                    style={{ backgroundImage: `url(${card.link})`, backgroundSize: 'cover' }}>
                </div>

                <div className="element__description">
                    <h2 className="element__subheading">{name}</h2>
                    <div className="element__group-like">
                        <button
                            type="button"
                            className="element__vector">
                        </button>
                        <p className="element__like-counter">{likes}</p>
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Card;


