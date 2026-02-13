const animated = document.querySelectorAll('.fade, .zoom');

function onScroll() {
  const trigger = window.innerHeight * 0.85;
  animated.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', onScroll);
onScroll();
