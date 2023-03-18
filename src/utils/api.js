class Api {
  constructor(options) {
    this._options = options;
    this._serverUrl = this._options.serverUrl;
    this._headers = this._options.headers;
  }
  // Загрузка информации о пользователе с сервера

  getUserInfo() {
    return fetch(this._serverUrl + '/users/me', {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //Загрузка карточек с сервера

  getInitialCards() {
    return fetch(this._serverUrl + '/cards', {
      headers: this._headers,
    }).then(this._getResponseData);
  }

  //Редактирование профиля

  editProfileInfo(userData) {
    return fetch(this._serverUrl + '/users/me', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: `${userData.name}`,
        about: `${userData.about}`
      }),
    }).then(this._getResponseData);
  }

  //Добавление новой карточки

  addNewCard(cardData) {
    return fetch(this._serverUrl + "/cards", {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: `${cardData.name}`,
        link: `${cardData.link}`
      }),
    })
    .then(this._getResponseData);
  }

  //

  deleteInitialCards(_id) {
    return fetch(this._serverUrl + '/cards/' + _id, {
      method: "DELETE",
      headers: this._headers
    })
    .then(this._getResponseData);
  }

  likeCardStatus(_id, isLiked) {
    if (isLiked) {
      return fetch(this._serverUrl + '/cards/' + _id + '/likes', {
        method: "DELETE",
        headers: this._headers
      })
      .then(this._getResponseData);
    } else {
      return fetch(this._serverUrl + '/cards/' + _id + '/likes', {
        method: "PUT",
        headers: this._headers
      })
      .then(this._getResponseData);
    }
  }
 
  changeAvatar(avatar) {
    return fetch(this._serverUrl + '/users/me/avatar', {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: `${avatar.avatar}`
      })
    })
    .then(this._getResponseData);
  }

  _getResponseData(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api({
  serverUrl: "https://mesto.nomoreparties.co/v1/cohort-59",
  headers: {
    authorization: "b185719c-abff-4277-81cb-becf6d2eb2bf",
    "Content-Type": "application/json",
  },
});



