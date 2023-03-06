import React, {useState, useEffect} from 'react';
import api from '../utils/api.js';
import Card from './Card.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([data, cards]) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        setCards(cards);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
        <main className="content">
          <section className="profile">
            <div className="profile__container">
              <div className="profile__avatar-container">
                <img src={`${userAvatar}`} alt="Аватар пользователя" className="profile__avatar" onClick={onEditAvatar} />
              </div>

              <div className="profile__info">
                <h1 className="profile__name">{userName}</h1>
                <button className="profile__btn-edit" type="button" onClick={onEditProfile} ></button>
                <p className="profile__text">{userDescription}</p>
              </div>
            </div>

            <button className="profile__button" type="button" onClick={onAddPlace}></button>
          </section>

          <section className="elements">
            {cards.map((card) => {
              return (
                <Card 
                  key={card._id}
                  card={card}
                  link={card.link}
                  name={card.name}
                  onCardClick={onCardClick}
                />
              )
            })

            }
          </section>
        </main>
    )
}

export default Main;