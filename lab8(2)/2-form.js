const form = document.querySelector('.feedback-form');
const formData = { email: '', message: '' };
const STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.email.value = formData.email;
    form.message.value = formData.message;
  }
});

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields.');
    return;
  }

  if (!emailPattern.test(formData.email)) {
    alert('Please enter a valid Gmail address.');
    return;
  }
  console.log('Form Data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData.email = '';
  formData.message = '';
});
