const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// DUPLICA AS IMAGENS PARA O LOOP
slider.innerHTML += slider.innerHTML;

// CONTROLES
nextBtn.addEventListener('click', () => {
  slider.scrollLeft += 300;
});

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= 300;
});

// SCROLL INFINITO
slider.addEventListener('scroll', () => {
  const scrollWidth = slider.scrollWidth / 2;

  if (slider.scrollLeft >= scrollWidth) {
    slider.scrollLeft = 0;
  }

  if (slider.scrollLeft <= 0) {
    slider.scrollLeft = scrollWidth;
  }
});
