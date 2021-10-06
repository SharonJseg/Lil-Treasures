import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupElement.querySelector('.form');
  }

  _handleSubmitForm(e) {
    e.preventDefault();
    this.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', this._handleSubmitForm);
  }

  close() {
    super.close();
    this._form.reset();
  }
}
