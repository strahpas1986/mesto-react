import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import EditPopupProfile from './EditPopupProfile';
import EditPopupAvatar from './EditPopupAvatar';
import EditPopupAddPlace from './EditPopupAddPlace';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen("popup_opened");
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen("popup_opened");
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen("popup_opened");
  } 
  const handleCardClick = (card) => {
    setSelectedCard(card);  
  };
  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  } 


  return (
    <div className="App">
      <body className="page">
        <Header />
        <Main 
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} 
          onCardClick={handleCardClick}
        />
        <Footer />

        <EditPopupProfile
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        />

        <EditPopupAvatar
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />

        <EditPopupAddPlace
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
      
      </body>
    </div>
  );
}

export default App;
