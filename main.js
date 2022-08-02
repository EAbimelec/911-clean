import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

getComponent("/atoms/main.html", "#app");

async function getComponent(path, elementId) {
  const fetchHTML = await fetch(path);
  const htmlText = await fetchHTML.text();

  document.querySelector(elementId).innerHTML = htmlText;
}
