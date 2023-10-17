function Main() {
    
    function handleEditProfileClick() {
        const popupEdit = document.querySelector('#popup-edit');
        popupEdit.classList.add('popup_opened');
    }
    
    return (
        <main>
        <section className="profile">
            <div className="profile__content">
            <button 
                    id="edit-avatar-button"
                     type="button"                     
                     className="profile__edit-avatar"
                     onMouseUp={handleEditProfileClick}
            >
                <img src="#" alt="аватар профиля" className="profile__avatar" />
                <div className="profile__edit-avatar-icon" />
            </button>
            <div className="profile__info">
                <div className="profile__container">
                <h1 id="profile__name" className="profile__name">жак ив</h1>
                <button
                    type="button"
                    className="button profile__edit-button"
                ></button>
                </div>
                <p id="profile__job" className="profile__job" />
            </div>
            </div>
            <button type="button" className="button profile__add-button"></button>
        </section>
        <section className="elements"></section>
        {/*Popup: Изменить профиль*/}
        <div className="popup popup-edit" id="popup-edit">
            <div className="popup__container">
            <h2 className="popup__heading">Редактировать профиль</h2>
            <form
                className="popup-edit__form popup__form"
                name="profileEditPopupForm"
                noValidate=""
            >
                <input
                id="name-input"
                type="text"
                name="name"
                className="popup__input popup__input_type_name"
                placeholder="Введите имя"
                minLength={2}
                maxLength={40}
                required=""
                />
                <span className="popup__input-error name-input-error" />
                <input
                id="job-input"
                type="text"
                name="job"
                className="popup__input popup__input_type_job"
                placeholder="Введите профессию"
                minLength={2}
                maxLength={200}
                required=""
                />
                <span className="popup__input-error job-input-error" />
                <button className="popup__button" type="submit">
                Сохранить
                </button>
            </form>
            <button
                type="button"
                className="button popup__button-close popup-edit__button-close"
            />
            </div>
        </div>
        {/*Popup: Добавить место*/}
        <div className="popup popup-add" id="popup-add">
            <div className="popup__container">
            <h2 className="popup__heading">Новое место</h2>
            <form
                className="popup-add__form popup__form"
                name="profileAddPopupForm"
                noValidate=""
            >
                <input
                id="place-input"
                type="text"
                name="place"
                className="popup__input popup__input_type_place"
                placeholder="Название"
                minLength={2}
                maxLength={30}
                required=""
                />
                <span className="popup__input-error place-input-error" />
                <input
                id="image-input"
                name="image"
                className="popup__input popup__input_type_image"
                placeholder="Ссылка на картинку"
                type="url"
                required=""
                />
                <span className="popup__input-error image-input-error" />
                <button className="popup__button" type="submit">
                Создать
                </button>
            </form>
            <button
                type="button"
                className="button popup__button-close popup-add__button-close"
            />
            </div>
        </div>
        {/*Popup: обновить аватар*/}
        <div className="popup popup-edit-avatar" id="popup-edit-avatar">
            <div className="popup__container">
            <h2 className="popup__heading">Обновить аватар</h2>
            <form
                className="popup-edit-avatar__form popup__form"
                name="profileAddPopupForm"
                noValidate=""
            >
                <input
                id="avatar-input"
                name="link"
                className="popup__input popup__input_type_link"
                placeholder="Ссылка на картинку"
                type="url"
                required=""
                />
                <span className="popup__input-error avatar-input-error" />
                <button className="popup__button" type="submit">
                Сохранить
                </button>
            </form>
            <button
                type="button"
                className="button popup__button-close popup-edit-avatar__button-close"
            />
            </div>
        </div>
        {/*Popup: вы уверены удалить?*/}
        <div className="popup popup-sure" id="popup-sure">
            <div className="popup__container">
            <h2 className="popup__heading popup-sure__heading">Вы уверены?</h2>
            <form
                className="popup-sure__form popup__form"
                name="profileSureForm"
                noValidate=""
            >
                <button className="popup__button" type="submit">
                Да
                </button>
            </form>
            <button
                type="button"
                className="button popup__button-close popup-sure__button-close"
            />
            </div>
        </div>
        {/*Popup: Картинка на весь экран*/}
        <div className="popup popup-zoom" id="popup-zoom">
            <div className="popup-zoom__container">
            <button
                type="button"
                className="button popup__button-close popup-zoom__button-close"
            />
            <img src="#" alt="Увеличенное фото" className="popup-zoom__image" />
            <h2 className="popup-zoom__subheading" />
            </div>
        </div>
        {/*Шаблон для ввода новых картинок*/}
        <template className="element-template" id="element-template" />
        </main>
    );
}

export default Main;