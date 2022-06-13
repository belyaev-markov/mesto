let page = document.querySelector('.page');
let popup = document.querySelector('.popup');

let editButton = document.querySelector('.profile__button-edit');
let saveButton = document.querySelector('.popup__button-save');
let offButton = document.querySelector('.popup__button-off');

let formFieldTop = document.querySelector('.popup__field:first-of-type');
let formFieldBottom = document.querySelector('.popup__field:last-of-type');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');


function openForm() {
  page.classList.remove('page_clear');
  popup.classList.remove('popup_closed');
}

function closeForm() {
  formFieldTop.value = profileTitle.textContent;
  formFieldBottom.value = profileSubtitle.textContent;

  page.classList.add('page_clear');
  popup.classList.add('popup_closed');
}

function editProfile() {
  profileTitle.textContent = formFieldTop.value;
  profileSubtitle.textContent = formFieldBottom.value;

  page.classList.add('page_clear');
  popup.classList.add('popup_closed');
}

editButton.addEventListener('click', openForm);
offButton.addEventListener('click', closeForm);
saveButton.addEventListener('click', editProfile);
