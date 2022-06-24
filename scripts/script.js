const popup = document.querySelector('.popup');
const form = document.querySelector('.popup__container');

const editButton = document.querySelector('.profile__button-edit');
const offButton = document.querySelector('.popup__button-off');

const formFieldTop = document.querySelector('.popup__field_type_profession');
const formFieldBottom = document.querySelector('.popup__field_type_specialization');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

function openForm() {
  formFieldTop.value = profileTitle.textContent;
  formFieldBottom.value = profileSubtitle.textContent;
  popup.classList.add('popup_open');
}

function closeForm() {
  popup.classList.remove('popup_open');
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


