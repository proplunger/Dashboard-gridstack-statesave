const loginFormHandler = async (event) => {
  event.preventDefault();

  const loginEmail = document.querySelector('#login-email').value.trim();
  const loginPassword = document.querySelector('#login-password').value.trim();

  if (loginEmail && loginPassword) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email: loginEmail, password: loginPassword }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);
