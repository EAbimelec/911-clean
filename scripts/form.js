window.addEventListener('load', () => {
  // get the form
  const form = document.getElementById('contact-form');

  // add event listener to the form
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mail = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: mail,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      form.reset();
    }
  });
});
