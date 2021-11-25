/*! MicroFactBox v1.0.0 | (c) 2021 Alexander Prestmo | MIT License | git+https://github.com/aprestmo/microfactbox.git */
document.addEventListener('DOMContentLoaded', () => {
  assistanceLevel();

  function assistanceLevel() {
    if (document.querySelector('#none').checked) {
      document.body.setAttribute('class', '');
      document.body.classList.add('show-none');
      console.log('ingenting');
      
    } else if (document.querySelector('#some').checked) {
      document.body.setAttribute('class', '');
      document.body.classList.add('show-some');
      console.log('litt');
    } else {
      document.body.setAttribute('class', '');
      document.body.classList.add('show-all');
      console.log('mye');
    }
  }
  
  
  mfbs = document.querySelectorAll('.mfb');
  mfbs.forEach(mfb => {
    mfb.setAttribute('aria-expanded', false);
    mfb.classList.add('is-hidden');
  });
  
  document.addEventListener('input', assistanceLevel);
  
  document.addEventListener('click', function (event) {
    if (event.target.matches('mark')) {
      event.target.parentElement.nextElementSibling.classList.toggle('is-hidden');
      
      if (event.target.parentElement.nextElementSibling.classList.contains('is-hidden')) {
        event.target.parentElement.nextElementSibling.setAttribute('aria-expanded', false);
      } else {
        event.target.parentElement.nextElementSibling.setAttribute('aria-expanded', true);
      }
    }
  });
});
