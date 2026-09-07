const revealItems = document.querySelectorAll('.project, .about, .contact');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(({ isIntersecting, target }) => {
    if (isIntersecting) { target.classList.add('visible'); observer.unobserve(target); }
  });
}, { threshold: 0.12 });
revealItems.forEach(item => { item.classList.add('reveal'); observer.observe(item); });

