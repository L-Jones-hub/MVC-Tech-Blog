const newPostHandler = async function (event) {
  event.preventDefault();

  const title = document.querySelector(`input[name="post-title"]`).value;
  const post = document.querySelector(`textarea[name="post-body"]`).value;

  await fetch(`/api/post`, {
    method: `POST`,
    post: JSON.stringify({
      title,
      post,
    }),
    headers: { "Content-Type": "application/json" },
  });
  document.location.replace(`/dashboard`);
};

document
  .querySelector(`#new-post-form`)
  .addEventListener(`submit`, newPostHandler);
