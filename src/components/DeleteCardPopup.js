import { useEffect } from "react";
import Validation from "../utils/Validation";

import PopupWithForm from "./PopupWithForm";

function DeleteCardPopup({ isOpen, onClose, onDeleteCard, onLoading, card }) {
    const { isFormValid, resetValidation } = Validation();

    useEffect(() => {
        resetValidation(true);
      }, [isOpen, resetValidation]);

      function handleSubmit(e) {
        e.preventDefault();
        onDeleteCard(card);
      }

    return (
        <PopupWithForm
            name="popup__form_delete_card"
            title="Вы уверены?"
            buttonText={onLoading ? "Удаление..." : "Да"}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isFormValid={isFormValid}
        />
    )
}

export default DeleteCardPopup;