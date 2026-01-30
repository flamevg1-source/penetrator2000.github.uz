// Вызывается при каждом скролле
function checkCards() {
  const cards = document.querySelectorAll('.centered-card');

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      card.classList.add('show-card');
    } else {
      card.classList.remove('show-card'); // позволяет анимации повторяться
    }
  });
}

// Событие скролла
window.addEventListener('scroll', checkCards);

// Проверка при загрузке страницы
window.addEventListener('load', checkCards);
