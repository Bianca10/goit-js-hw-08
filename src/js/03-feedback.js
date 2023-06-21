import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailEl = document.querySelector('label [name="email"]');
const messageEl = document.querySelector('label [name ="message"]');
const btn = document.getElementsByTagName('button');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(modificare, 500));

function modificare() {
  const email = emailEl.value;
  const message = messageEl.value;
  console.log(email);
  console.log(message);

  const formData = { email, message };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function loadPage() {
  const messageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (messageData) {
    emailEl.value = messageData.email;
    messageEl.value = messageData.message;
  }
}
loadPage();

form.addEventListener('submit', event => {
  event.preventDefault;
  const email = emailEl.value;
  const message = messageEl.value;

  console.log(`Email: ${email}  Message: ${message}`);
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});
