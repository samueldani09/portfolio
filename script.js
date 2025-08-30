document.getElementById('query-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const query = document.getElementById('query').value.trim();
  const message = document.getElementById('form-message');

  if (!name || !email || !query) {
    message.style.color = 'red';
    message.textContent = 'All fields are required.';
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    message.style.color = 'red';
    message.textContent = 'Invalid email format.';
    return;
  }

  message.style.color = 'lightgreen';
  message.textContent = `Thanks, ${name}! Your query has been submitted.`;

  this.reset();
});