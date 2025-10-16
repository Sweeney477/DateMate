const forms = [
  {
    form: document.getElementById('waitlist-form'),
    message: document.getElementById('form-message'),
  },
  {
    form: document.getElementById('waitlist-form-footer'),
    message: document.getElementById('form-message-footer'),
  },
];

const YEAR_ELEMENT = document.getElementById('year');
if (YEAR_ELEMENT) {
  YEAR_ELEMENT.textContent = new Date().getFullYear();
}

forms.forEach(({ form, message }) => {
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const emailInput = form.querySelector('input[type="email"]');

    if (!emailInput) return;

    if (!emailInput.validity.valid) {
      message.textContent = 'Add a valid email and try again.';
      return;
    }

    message.textContent = 'You\'re on the list! We\'ll be in touch soon.';
    form.reset();
  });
});
