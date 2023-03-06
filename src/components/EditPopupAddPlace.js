import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditPopupAddPlace({isOpen, onClose}) {
    return (
        <PopupWithForm isOpen={isOpen} onClose={onClose} name='name' subtitle='Новое место' buttonText='Создать'>
            <form action="#" className="popup__form popup__form_add-card" name="form__add-card" id="popup__form_add"/>
              <input
                name="name"
                id="form-element"
                required
                placeholder="Название"
                type="text"
                className="popup__input popup__input_form_name"
                minlength="1"
                maxlength="30"
                value=""
              />
              <span id="form-element-error" className="popup__error"></span>
              <input
                name="link"
                id="link-element"
                required
                placeholder="Ссылка на картинку"
                type="url"
                className="popup__input popup__input_form_link"
                value=""
              />
              <span id="link-element-error" className="popup__error"></span>
        </PopupWithForm>
    )
}

export default EditPopupAddPlace;