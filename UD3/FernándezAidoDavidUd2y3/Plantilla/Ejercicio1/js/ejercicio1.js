const cards = document.querySelectorAll('.profile-card');
const checkbox = document.getElementById('interviewMode');

cards.forEach(card => {
  const img = card.querySelector('img');
  const div = document.createElement('div');
  div.className = 'bio-info';
  div.textContent = img.dataset.bio;
  div.style.display = 'none';
  card.appendChild(div);

  img.addEventListener('mouseenter', () => {
    if (checkbox.checked) {
      div.style.display = 'flex';
    }
  });

  img.addEventListener('mouseleave', () => {
    if (checkbox.checked) {
      div.style.display = 'none';
    }
  });
});
