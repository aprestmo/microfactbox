document.addEventListener('DOMContentLoaded', () => {
  mfbs = document.querySelectorAll('.mfb');
  mfbs.forEach(mfb => {
    mfb.setAttribute('aria-expanded', false);
    mfb.classList.add('is-hidden');
  });
  
  document.addEventListener('click', function (event) {
    if (event.target.matches('mark')) {
      event.target.parentElement.nextElementSibling.classList.toggle('is-hidden')
      
      if (event.target.parentElement.nextElementSibling.classList.contains('is-hidden')) {
        event.target.parentElement.nextElementSibling.setAttribute('aria-expanded', false);
      } else {
        event.target.parentElement.nextElementSibling.setAttribute('aria-expanded', true);
      }
    }
  })
});
