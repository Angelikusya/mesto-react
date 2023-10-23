import { useState, useEffect } from 'react';
import {api} from '../utils/api.js';
import Card from './Card.js';


function Main(props) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then(([userData, cardsData]) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
          
            setCards(cardsData);
        })
        .catch(err => console.log(err));
    }, []);

    return(
    <main className="page">
        <section className="profile">
            <div className="profile__content">
                <button 
                    className="profile__edit-avatar"
                    id="edit-avatar-button"
                    type="button"                     
                    onClick={props.onEditAvatar}
                >
                    <div alt="аватар профиля" 
                        className="profile__avatar" 
                        style={{ backgroundImage: `url(${userAvatar})`, backgroundSize: 'cover' }} 
                    />
                    <div className="profile__edit-avatar-icon" />
                </button> 
                <div className="profile__info">
                    <div className="profile__container">
                        <h1 id="profile__name" className="profile__name">{userName}</h1>
                        <button
                            type="button"
                            className="button profile__edit-button"
                            onClick={props.onEditProfile}
                        >
                        </button>
                    </div>
                    <p id="profile__job" className="profile__job">{userDescription}</p>
                </div>
            </div>
            <button 
                type="button" 
                className="button profile__add-button"
                onClick={props.onAddPlace}
                >
            </button>
        </section>

        <section className="elements">
                {cards.map((card) => (
                    <Card 
                        key={card._id} 
                        card={card} 
                        name={card.name} 
                        src={card.link} 
                        likes={card.likes.length}
                        onCardClick={props.onCardClick}
                    />
                ))}
            </section>
        </main>
    );
}

export default Main;


 
        // {/*Шаблон для ввода новых картинок*/}
        // <template className="element-template" id="element-template" />