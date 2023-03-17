import { useEffect, useRef } from "react";
import Validation from "../utils/Validation";

import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onLoading }) {
  const { values, errors, isFormValid, onChange, resetValidation } = Validation();  
  const inputRef = useRef();
    useEffect(() => {
      resetValidation();
      inputRef.current.value = "";
    }, [isOpen, resetValidation])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: inputRef.current.value,
        });
    } 

    return (
        <PopupWithForm
            name="avatar"
            subtitle="Обновить аватар"
            buttonText={onLoading ? "Сохранение..." : "Сохранить"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
        >
          <label>
            <input
                  name="avatar"
                  id="avatar"
                  required
                  placeholder="Ссылка на аватар"
                  type="url"
                  className={`popup__input ${
                    errors.about ? "popup__input_type_error" : ""
                  }`}
                  ref={inputRef}
                  onChange={onChange}
                  value={values.avatar || ""}
                />
            <span id="avatar-error" className={`popup__error ${
                errors.avatar ? "popup__error_active" : ""
                }`}>{errors.avatar || ""}</span>
          </label>
            
        </PopupWithForm>
    ) 
}

export default EditAvatarPopup;

