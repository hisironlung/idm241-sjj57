console.log('Hi')

const card = document.querySelector('.card');

card.addEventListener('click', function () {
  console.log('CARD CLICKED');
  card.classList.toggle('flipped');
});

