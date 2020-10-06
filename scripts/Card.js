class Card {
  constructor( name, link, handleCardClick ) {
    this.name = name;
    this.link = link;
    this.handleCardClick = handleCardClick;
  }

  _cardContentNew() {
    const card = document.querySelector(".card-template").content.querySelector('.card').cloneNode(true);
    return card;
  }

  generateCard() {
    // Запишем разметку в приватное поле _element.
    // Так у других элементов появится доступ к ней.
    this._element = this._cardContentNew();

    this._element.querySelector('.card__photo').src = this.link;
    this._element.querySelector('.card__text').textContent = this.name;
    this._element.querySelector(".card__like").addEventListener('click', this.like);
    this._element.querySelector(".card__delete-button").addEventListener('click', this.deleteCard);
    this._element.querySelector(".card__photo").addEventListener('click', () => this.handleCardClick(this.name, this.link));

    return this._element;
  }

  like(evt) {
    evt.target.classList.toggle("card__like_active");
  }

  deleteCard(evt) {
    evt.target.closest(".card").remove();
  }

}

export default Card