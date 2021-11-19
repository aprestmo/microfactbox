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


const inputTags = document.querySelectorAll('input');
// console.log(inputTags)

document.addEventListener('input', function () {

  inputTags.forEach(inputTag => {
    // console.dir(inputTag.checked)
    if (inputTag.checked && inputTag.value === 'easy') {
      console.log('a: ', inputTag.value)
    } else if (inputTag.checked && inputTag.value === 'medium') {
      console.log('b: ', inputTag.value)
    } else {
      console.log('c: ', inputTag.value)
    }
  })
})
