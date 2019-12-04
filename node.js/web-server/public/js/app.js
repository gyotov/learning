const weatherForm = document.querySelector('form');
const searchField = document.querySelector('input');
const msgOne = document.querySelector('#msg-1');
const msgTwo = document.querySelector('#msg-2');

weatherForm.addEventListener('submit', event => {
  event.preventDefault();

  const location = searchField.value;

  msgOne.textContent = 'Loading...';
  msgTwo.textContent = '';

  fetch(`/weather?address=${location}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        msgOne.textContent = data.error;
      } else {
        msgOne.textContent = data.location;
        msgTwo.textContent = data.forecast;
      }
    });
  });
});
