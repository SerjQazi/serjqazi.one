import {rtContent, fmbContent, rlContent, shContent} from './modalContent.js'

// flickity carousel options
const element = document.querySelector(".main-carousel");
const flkty = new Flickity(element, {
  contain: true,
  wrapAround: true,
});

// tingle modal options
const modalOptions = {
  footer: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["modalClass"],
};

const rtModal = new tingle.modal(modalOptions);
const fmbModal = new tingle.modal(modalOptions);
const rlModal = new tingle.modal(modalOptions);
const shModal = new tingle.modal(modalOptions);


rtModal.setContent(rtContent);
const roboTrivia = document.querySelector(".rtContainer");
roboTrivia.addEventListener("click", () => rtModal.open());

fmbModal.setContent(fmbContent);
const findMyBeer = document.querySelector(".fmbContainer");
findMyBeer.addEventListener("click", () => fmbModal.open());

rlModal.setContent(rlContent);
const recipeLookup = document.querySelector(".rlContainer");
recipeLookup.addEventListener("click", () => rlModal.open());

shModal.setContent(shContent);
const sanctuaryHelper = document.querySelector(".shContainer");
sanctuaryHelper.addEventListener("click", () => shModal.open());



// darkMode toggle function
const checkbox = document.getElementById("checkbox");

checkbox.onchange = () => {
  const bodyElement = document.querySelector("body");
  bodyElement.classList.toggle("bodyDark");

  const folderContainer = document.querySelector(".folderContainer");
  folderContainer.classList.toggle("darkFolder");

  const fmbLight = document.querySelectorAll(".light");
  fmbLight.forEach((video) => {
    video.classList.toggle("displayOff");
  });

  const fmbDark = document.querySelectorAll(".dark");
  fmbDark.forEach((video) => {
    video.classList.toggle("displayOn");
  });

  const h1Element = document.querySelector("h1");
  h1Element.classList.toggle("h1Dark");

  const h3Element = document.querySelectorAll("h3");
  h3Element.forEach((h3) => {
    h3.classList.toggle("h3Dark");
  });
};