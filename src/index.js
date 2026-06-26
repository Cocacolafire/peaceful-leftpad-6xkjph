const contactBtn = document.getElementsByClassName('contact-btn')[0];
const status = document.getElementById('status');
const card = document.getElementsByClassName('card')[0];

contactBtn.addEventListener('click', () => {
  status.textContent =
    '✅ Дякую! Напишіть мені в телеграм - відповім сьогодні!';
});
