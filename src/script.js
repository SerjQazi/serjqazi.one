// darkMode toggle
const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  const bodyElement = document.querySelector('body');
  bodyElement.classList.toggle('bodyDark');

  const fmbLight = document.querySelector('video.fmbLight');
  fmbLight.classList.toggle('displayOff');
  
  const fmbDark = document.querySelector('video.fmbDark');
  fmbDark.classList.toggle('displayOn');

});
