
import React, { useState } from 'react'
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
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

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }


  return (
    <div className="page">
      <Header/>
      <Main
        onEditProfile={handleEditProfileClick}         
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        title="Обновить аватар"
        name="edit-avatar"
        submitButton="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="popup-edit-avatar"
          type="url"
          className="popup__input popup__input_type_link"
          name="avatar"
          placeholder="Ссылка на картинку"
          required
        />
      </PopupWithForm>
      <PopupWithForm
        title="Редактировать профиль"
        name="edit-profile"
        submitButton="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="name-input"
          type="text" 
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Введите имя"
          minLength="2" maxLength="40"
          required
        />
          <span className="popup__input-error" id="name-input-error"></span>
        <input 
          id="job-input"
          type="text" 
          name="job"
          className="popup__input popup__input_type_job"
          placeholder="Введите профессию"
          minLength="2" maxLength="200"
          required
        />
          <span className="popup__input-error" id="job-input-error"></span>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место"
        name="add"
        submitButton="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          id="place-input"
          type="text" 
          name="place"
          className="popup__input popup__input_type_place"
          placeholder="Название"
          minLength="2" maxLength="30"
          required
        />
        <span className="popup__input-error" id="place-input-error"></span>
        <input  
          id="image-input"
          name="image"
          className="popup__input popup__input_type_image"
          placeholder="Ссылка на картинку"
          type="url"
          required
        />
        <span className="popup__input-error" id="image-input-error"></span>
      </PopupWithForm>
      {selectedCard && (
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      )}
    </div>
  );
}


export default App;
