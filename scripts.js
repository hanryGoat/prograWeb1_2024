//modificacion al script
let slideIndex = 0;//ponemos una variable
const interval = 2000; // este nos ayuda al cambio de diapositivas en milisegundos

// esta funcion muestra las imagenes 
function showSlides() {
  const slides = document.querySelectorAll('.carousel-content img');
  
  // oculta las imagenes 
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // incrementan las imagenes actuales
  slideIndex++;
  
  // Si el índice supera el número de las imagenes volvera a iniciar del principio 
  if (slideIndex > slides.length) { 
    slideIndex = 1; 
  }
  
  // muestra la imagen
  slides[slideIndex - 1].classList.add('active');

  // es para que vuelva a ejecutarse el programa nuevamente 
  setTimeout(showSlides, interval); 
}

// este inicia a que la imagenes cambien 
showSlides();
