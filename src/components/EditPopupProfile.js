import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditPopupProfile({isOpen, onClose}) {
    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name='name' subtitle='Редактировать профиль' buttonText='Сохранить'>
            <form action="#" className="popup__form popup__form_edit-profile" name="form"/>
              <input
                name="name"
                id="name-element"
                required
                placeholder="Жак-Ив Кусто"
                type="text"
                className="popup__input popup__input_form_name"
                minlength="2"
                maxlength="40"
                value=""
              />
              <span id="name-element-error" className="popup__error"></span>
              <input
                name="about"
                id="job-element"
                required
                placeholder="Исследователь океана"
                type="text"
                className="popup__input popup__input_form_job"
                minlength="2"
                maxlength="200"
                value=""
              />
              <span id="job-element-error" className="popup__error"></span>
        </PopupWithForm>
    )
}

export default EditPopupProfile;