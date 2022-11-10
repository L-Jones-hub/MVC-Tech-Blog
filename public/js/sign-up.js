const signUpFormHandler = async function (event) {
  event.preventDefault();

  const username = document.querySelector(`#username-signup`);
  const password = document.querySelector(`#password-signup`);

  const response = await fetch("/api/user", {
    method: `POST`,
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    document.location.replace(`/dashboard`);
  } else {
    alert(`Could not sign you up. Please try again.`);
  }
};

document
  .querySelector(`#signup-form`)
  .addEventListener(`submit`, signUpFormHandler);
