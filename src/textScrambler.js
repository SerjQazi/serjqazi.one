const phrases = ["CODE", "REACT", "JAVASCRIPT", "HTML", "SASS", "CSS"];

const el = document.querySelector(".text");

const fx = new TextScramble(el);
let counter = 0;

const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 800);
  });

  counter = (counter + 1) % phrases.length;
};

next();
