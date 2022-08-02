import '../styles/style.css';

// eslint-disable-next-line no-use-before-define
getComponent('/atoms/main.html', '#main');
getComponent('/atoms/footer.html', '#footer');

async function getComponent(path, elementId) {
  const fetchHTML = await fetch(path);
  const htmlText = await fetchHTML.text();

  document.querySelector(elementId).innerHTML = htmlText;
}
