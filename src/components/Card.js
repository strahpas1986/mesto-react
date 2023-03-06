import React from 'react';

function Card({card, onCardClick}) {
    function handleCardClick() {
        onCardClick(card);
    }
    return (
        <article className="element">
            <img src={card.link} alt={card.name} className="element__image" onClick={handleCardClick}/>
            <div className="element__descr">
              <h2 className="element__subtitle">{card.name}</h2>
              <button className="element__delete" type="submit"></button>
              <div className="element__like_container">
                <button className="element__like" type="button"></button>
                <p className="element__like-number">{card.likes.length}</p>
              </div>
            </div>
          </article>
    )
}

export default Card;