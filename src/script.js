// darkMode toggle
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  const bodyElement = document.querySelector('body');
  bodyElement.classList.toggle('bodyDark');

});