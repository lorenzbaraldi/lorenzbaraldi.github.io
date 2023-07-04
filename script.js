// Add a fade-in effect to the research items
const researchItems = document.querySelectorAll('.research-item');

researchItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.1}s`;
  item.classList.add('fade-in');
});

// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const offset = 70;

    if (target) {
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: 'smooth'
      });
    }
  });
});

// Toggle active class for navigation links
const navigationLinks = document.querySelectorAll('.nav-link');

navigationLinks.forEach(link => {
  link.addEventListener('click', function () {
    navigationLinks.forEach(navLink => navLink.classList.remove('active'));
    this.classList.add('active');
  });
});
