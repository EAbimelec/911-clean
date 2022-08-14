window.addEventListener('load', () => {
  const header = document.getElementById('header');
  const logo = document.getElementById('logo');

  window.onscroll = () => {
    const space = header.offsetTop;
    if (space > 1) {
      header.classList.remove('major-div');
      header.classList.add('major-div2');
      logo.classList.remove('logo');
      logo.classList.add('logo2');
    } else {
      header.classList.remove('major-div2');
      header.classList.add('major-div');
      logo.classList.add('logo');
      logo.classList.remove('logo2');
    }
  };
});
