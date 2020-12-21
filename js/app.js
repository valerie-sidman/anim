const container = document.querySelector('.container');
const collapseBtn = document.querySelector('.collapse-btn');

collapseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (container.classList.contains('reveal')) {
    container.classList.remove('reveal');
  } else {
    container.classList.add('reveal');
  }
});
