import React, { useState, useEffect } from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
//import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import {api} from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddCardPopup.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cards, setCards] = useState([]);
  //const [renderLoading, setRenderLoading] = useState(false);;

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cardsData]) => {
        setCurrentUser(userData);
        setCards(cardsData)
      })
      .catch((err) => console.log(err));
  }, []);


  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }


  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
      .catch((err) => console.error(`Ошибка: ${err}`))
};

  function handleUpdateUser(data) {
    //setRenderLoading(true);
    api.setUserInfo(data.name, data.about)
      .then(res => {
        setCurrentUser(res);
        setEditProfilePopupOpen(false);
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
      //.finally(() => setRenderLoading(false))
  };

  function handleUpdateAvatar(data) {
    api.setUserAvatar(data.avatar)
      .then(res => {
        setCurrentUser(res);
        setIsEditAvatarPopupOpen(false);
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
  };

  function handleAddplace(data) {
    api.addCard(data.name, data.link)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          setIsAddPlacePopupOpen(false);
      })
      .catch((err) => console.error(`Ошибка: ${err}`))
  };

  function handleCardDelete(card) {
    api.removeCard(card._id)
    .then((res) => {
      setCards((state) => state.filter((c) => card._id !== c._id ));
      //setDeleteCardPopupOpen(false);
    })
    .catch((err) => console.error(`Ошибка: ${err}`))
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }
  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header/>
        <Main
          onEditProfile={handleEditProfileClick}         
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <Footer/>
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser}/>
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}  onUpdateAvatar={handleUpdateAvatar}/> 
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddplace}/>
        {selectedCard && (
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        )}
      </div>
    </CurrentUserContext.Provider>
  );
}


export default App;
