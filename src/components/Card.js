import { useContext } from 'react';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner._id === currentUser._id;
    const isLiked = card.likes.some(i => i._id === currentUser._id);

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