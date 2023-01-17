const signupFormHandler = async (event) => {
  event.preventDefault();

  const signupFirstname = document
    .querySelector('#signup-firstname')
    .value.trim();
  const signupLastname = document
    .querySelector('#signup-lastname')
    .value.trim();
  const signupEmail = document.querySelector('#signup-email').value.trim();
  const signupPassword = document
    .querySelector('#signup-password')
    .value.trim();
  // const passwordConfirm = document
  //   .querySelector('#password-confirm')
  //   .value.trim();

  if (
    signupFirstname &&
    signupLastname &&
    signupEmail &&
    signupPassword //&&
    // passwordConfirm &&
    // signupPassword === passwordConfirm
  ) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        first_name: signupFirstname,
        last_name: signupLastname,
        email: signupEmail,
        password: signupPassword,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);
