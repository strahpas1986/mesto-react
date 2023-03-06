import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditPopupAvatar({isOpen, onClose}) {
    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name='avatar' subtitle='Обновить аватар' buttonText='Сохранить'>
            <form action="#" className="popup__form popup__form_edit-avatar" name="form__edit-avatar" id="popup__edit-avatar">
              <input
                name="avatar"
                id="avatar"
                required
                placeholder="Ссылка на аватар"
                type="url"
                className="popup__input popup__input_form_avatar"
                value=""
              />
              <span id="avatar-error" className="popup__error"></span>
              {/* <button className="popup__button" type="submit">Сохранить</button> */}
            </form>
        </PopupWithForm>
    )
}       

export default EditPopupAvatar;