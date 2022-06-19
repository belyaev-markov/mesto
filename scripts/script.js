const background = document.querySelector('.background');
const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__container');

const editButton = document.querySelector('.profile__button-edit');
const offButton = document.querySelector('.popup__button-off');

const formFieldTop = document.querySelector('.popup__field_position_top');
const formFieldBottom = document.querySelector('.popup__field_position_bottom');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardsButton = document.querySelectorAll('.card__button');

function openForm() {
  formFieldTop.value = profileTitle.textContent;
  formFieldBottom.value = profileSubtitle.textContent;
  background.classList.remove('background_closed');
  popup.classList.remove('popup_closed');
}

function closeForm() {
  background.classList.add('background_closed');
  popup.classList.add('popup_closed');
}

function submitForm(evt) {
  evt.preventDefault();
  profileTitle.textContent = formFieldTop.value;
  profileSubtitle.textContent = formFieldBottom.value;
  closeForm();
}

editButton.addEventListener('click', openForm);
offButton.addEventListener('click', closeForm);
form.addEventListener('submit', submitForm);

for (let index = 0; index < cardsButton.length; index++) {
  const element = cardsButton[index];
  element.addEventListener('click', () => {
    element.classList.add('card__button_active');
  }
  );


}
