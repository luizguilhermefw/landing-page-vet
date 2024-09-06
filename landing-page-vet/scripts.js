const testimonials = document.querySelectorAll('.testimonial');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;
const intervalTime = 3000; // Tempo em milissegundos (3 segundos)
let interval; // Variável para armazenar o intervalo

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.style.display = (i === index) ? 'block' : 'none';
  });
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(currentIndex);
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(currentIndex);
}

// Inicializa o carrossel mostrando o primeiro depoimento
showTestimonial(currentIndex);

// Adiciona eventos aos botões
nextButton.addEventListener('click', nextTestimonial);
prevButton.addEventListener('click', prevTestimonial);

// Função para iniciar o intervalo
function startInterval() {
  interval = setInterval(nextTestimonial, intervalTime);
}

// Inicia o intervalo
startInterval();

// Função para reiniciar o intervalo
function resetInterval() {
  clearInterval(interval);
  startInterval();
}

// Reinicia o intervalo ao clicar nos botões
nextButton.addEventListener('click', resetInterval);
prevButton.addEventListener('click', resetInterval);