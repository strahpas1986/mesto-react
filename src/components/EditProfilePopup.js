import { useEffect, useContext } from "react";
import Validation from '../utils/Validation';

import PopupWithForm from "./PopupWithForm";

import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({ isOpen, onClose, onUpdateUser, onLoading }) {
    const { values, errors, isFormValid, onChange, resetValidation } = Validation();
    // const [name, setName] = useState("");
    // // const [value, setValue] = useState({});
    // const [description, setDescription] = useState("");
    const currentUser = useContext(CurrentUserContext);

    
    useEffect(() => {
      // setName(currentUser.name);
      // setDescription(currentUser.about);
      resetValidation(true, currentUser);
    }, [currentUser, isOpen, resetValidation]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
    }

    // const handleNameChange = (e) => {
    //   e.preventDefault();
    //   setName(e.target.value);
    // }

    // const handleDescription = (e) => {
    //   e.preventDefault();
    //   setDescription(e.target.value);
    // }
      
      return (
        <PopupWithForm
          name="name"
          subtitle="Редактировать профиль"
          buttonText={onLoading ? "Сохранение..." : "Сохранить"}
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
        >
        <label className="popup__wrapper">
          <input
                  name="name"
                  id="name-element"
                  required
                  placeholder="Жак-Ив Кусто"
                  type="text"
                  className={`popup__input ${
                    errors.name ? "popup__input_type_error" : ""
                  }`}
                  minlength="2"
                  maxlength="40"
                  value={values.name || ""}
                  onChange={onChange}
              />
              <span id="name-element-error" className={`popup__error ${
                errors.name ? "popup__error_active" : ""
                }`}>{errors.name || ""}</span>
          </label>

          <label className="popup__wrapper">
            <input
                  name="about"
                  id="job-element"
                  required
                  placeholder="Исследователь океана"
                  type="text"
                  className={`popup__input ${
                    errors.about ? "popup__input_type_error" : ""
                  }`}
                  minlength="2"
                  maxlength="200"
                  value={values.about || ""}
                  onChange={onChange}
              />
              <span id="job-element-error" className={`popup__error ${
                errors.about ? "popup__error_active" : ""
                }`}>{errors.about || ""}</span>
          </label>          
        
      </PopupWithForm>
      );  
} 

export default EditProfilePopup;