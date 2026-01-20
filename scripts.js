const slider = document.getElementById('slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');


slider.innerHTML += slider.innerHTML;


nextBtn.addEventListener('click', () => {
  slider.scrollLeft += 300;
});

prevBtn.addEventListener('click', () => {
  slider.scrollLeft -= 300;
});

slider.addEventListener('scroll', () => {
  const scrollWidth = slider.scrollWidth / 2;

  if (slider.scrollLeft >= scrollWidth) {
    slider.scrollLeft = 0;
  }

  if (slider.scrollLeft <= 0) {
    slider.scrollLeft = scrollWidth;
  }
});
