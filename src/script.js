// darkMode toggle
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  const bodyElement = document.querySelector('body');
  bodyElement.classList.toggle('bodyDark');

  const fmbLight = document.querySelectorAll('.light');
  fmbLight.forEach(video => {
    video.classList.toggle('displayOff');
  });
  
  const fmbDark = document.querySelectorAll('.dark');
  fmbDark.forEach(video => {
    video.classList.toggle('displayOn');
  });

});

const element = document.querySelector(".main-carousel");
const flkty = new Flickity(element, {
  contain: true,
  wrapAround:true,
});

const modalOptions = {
  footer: false,
  closeMethods: ["overlay", "button", "escape"],
  closeLabel: "Close",
  cssClass: ["modalClass"],
};

const rtModal = new tingle.modal (modalOptions);
const fmbModal = new tingle.modal (modalOptions);
const rlModal = new tingle.modal (modalOptions);
const shModal = new tingle.modal (modalOptions);

const fmbContent = `<h4>find my beer</h4>
                  <p>A way to find all the breweries in your state</p>
                  <p>API to generate a list of breweries</p>
                  <p>Font of card shows name and address</p>
                  <p>Back of card shows brewery type, contact info and website</p>
                  <li>
                    <a href="https://serjqazi.dev/find-my-beer">find-my-beer React App</a>
                  </li>
                  <li>
                    <a href="https://github.com/SerjQazi/find-my-beer-porject-3">GitRepo</a>
                  </li>`;

const rtContent = `<h4>robo trivia</h4>
                  <p>Solo or Multiplayer trivia game</p>
                  <p>API to generate questions & multiple choice answers</p>
                  <p>API to assign avatars to usernames</p>
                  <p>Firebase to keep user data and score</p>
                  <li>
                    <a href="https://serjqazi.dev/robo-trivia">robo-trivia React & Firebase</a>
                  </li>  
                  <li>
                    <a href="https://github.com/robo-trivia-group/project-4-react">GitRepo</a>
                  </li>`;

const rlContent = `<h4>recipe lookup</h4>
                  <p>Vanilla JavaScript combined with SASS</p>
                  <p>A simple yet elegant way to look up a recipe for anything you want to cook</p>
                  <p>Pick you ingredients & you will get your recipes</p>
                  <li>
                    <a href="https://serjqazi.dev/recipe-lookup">recipe-lookup JavaScript</a>
                  </li>
                  <li>
                    <a href="https://github.com/serj-tom-project-two/project-two-recipe-api">GitRepo</a>
                  </li>`;

const shContent = `<h4>sanctuary helper</h4>
                  <p>a multi-page PSD coversion</p>
                  <p>fully responsive on all screen sizes</p>
                  <p>has an aminated collapsing mobile nav</p>
                  <p>styled to pixel perfection with SASS</p>
                  <li>
                    <a href="https://serj-jordan-sanctuary-helper.github.io/project-one/">sanctuary-helper HTML / SASS</a>
                  </li>
                  <li>
                    <a href="https://github.com/serj-jordan-sanctuary-helper/project-one">GitRepo</a>
                  </li>`;

rtModal.setContent(rtContent);
const roboTrivia = document.querySelector('.rtContainer');
  roboTrivia.addEventListener('click', () => rtModal.open())

fmbModal.setContent(fmbContent);
const findMyBeer = document.querySelector('.fmbContainer');
  findMyBeer.addEventListener('click', () => fmbModal.open())

rlModal.setContent(rlContent);
const recipeLookup = document.querySelector('.rlContainer');
  recipeLookup.addEventListener('click', () => rlModal.open())

shModal.setContent(shContent);
const sanctuaryHelper = document.querySelector('.shContainer');
  sanctuaryHelper.addEventListener('click', () => shModal.open())

