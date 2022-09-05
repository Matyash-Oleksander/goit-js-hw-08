import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

// 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
// в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".
const formData = {};
// const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));
// refs.form.addEventListener('input', onFormInput);

populateForm();

function onFormInput(evt) {
  evt.preventDefault();
  // console.log(evt.target.name);
  // console.log(evt.target.value);
  formData[evt.target.name] = evt.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// 2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
function populateForm() {
  const savedForm = JSON.parse(localStorage.getItem('feedback-form-state'));

  console.log(savedForm);

  if (savedForm) {
    console.log('Повертати дані в форму');
    // console.log(savedForm);
    refs.form.email.value = savedForm.email;
    refs.form.message.value = savedForm.message;
  }
}

// 3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.

function onFormSubmit(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}
