const header = document.getElementById('header');
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const slides = [...document.querySelectorAll('.hero-slide')];
const dotsArea = document.getElementById('slideDots');
const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 30);
});

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

let activeSlide = 0;
slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.setAttribute('aria-label', `Ir para o slide ${index + 1}`);
  dot.addEventListener('click', () => setSlide(index));
  dotsArea.appendChild(dot);
});
const dots = [...dotsArea.querySelectorAll('button')];

function setSlide(index) {
  activeSlide = index;
  slides.forEach((slide, i) => slide.classList.toggle('active', i === activeSlide));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === activeSlide));
}

setSlide(0);
setInterval(() => setSlide((activeSlide + 1) % slides.length), 5200);

if (slider) {
  slider.innerHTML += slider.innerHTML;
  nextBtn.addEventListener('click', () => slider.scrollLeft += 320);
  prevBtn.addEventListener('click', () => slider.scrollLeft -= 320);

  let autoScroll = setInterval(() => {
    slider.scrollLeft += 1;
    if (slider.scrollLeft >= slider.scrollWidth / 2) slider.scrollLeft = 0;
  }, 18);

  slider.addEventListener('mouseenter', () => clearInterval(autoScroll));
  slider.addEventListener('mouseleave', () => {
    autoScroll = setInterval(() => {
      slider.scrollLeft += 1;
      if (slider.scrollLeft >= slider.scrollWidth / 2) slider.scrollLeft = 0;
    }, 18);
  });
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
