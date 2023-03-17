import { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";
import Validation from '../utils/Validation';

function EditPopupAddPlace({isOpen, onClose, onAddPlace, onLoading }) {
  const { values, errors, isFormValid, onChange, resetValidation } = Validation();  
  useEffect(() => {
    resetValidation();
  }, [isOpen, resetValidation]);
  
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace(values);
  }
  
  

  return (
        <PopupWithForm 
          isOpen={isOpen} 
          onClose={onClose} 
          name='name' 
          subtitle='Новое место' 
          onSubmit={handleSubmit}
          buttonText={onLoading ? "Сохранение..." : "Сохранить"}
          isFormValid={isFormValid} 
        >
            <label>
              <input
                  name="name"
                  id="form-element"
                  required
                  placeholder="Название"
                  type="text"
                  className={`popup__input ${
                    errors.name ? "popup__input_form_type_error" : ""
                  }`}
                  minlength="1"
                  maxlength="30"
                  value={values.name || ""}
                  onChange={onChange}
                />
              <span id="form-element-error" className={`popup__error ${
                errors.name ? "popup__error_active" : ""
                }`}>{errors.name || ""}</span>
            </label>

            <label>
              <input
                  name="link"
                  id="link-element"
                  required
                  placeholder="Ссылка на картинку"
                  type="url"
                  className={`popup__input ${
                    errors.link ? "popup__input_type_error" : ""
                    }`}
                  value={values.link || ""}
                  onChange={onChange}
                />
              <span id="link-element-error" className={`popup__error ${
                errors.name ? "popup__error_active" : ""
                }`}>{errors.link || ""}</span>
            </label>
              
        </PopupWithForm>
    )
}

export default EditPopupAddPlace;