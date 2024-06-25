$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
      loop: true, // Para que el carrusel se repita
      margin: 0, // Sin margen entre ítems
      nav: false, // Desactivar las flechas de navegación de Owl Carousel
      dots: false, // Desactivar los puntos indicadores de Owl Carousel
      responsive:{
        0:{
          items: 1 // Mostrar 1 ítem en pantallas pequeñas
        },
        600:{
          items: 3 // Mostrar 3 ítems en pantallas más grandes
        },
        1000:{
          items: 5 // Mostrar 5 ítems en pantallas aún más grandes
        }
      }
    });
  
    // Función para avanzar al siguiente ítem
    function goToNextSlide() {
      $(".owl-carousel").trigger('next.owl.carousel');
    }
  
    // Función para retroceder al ítem anterior
    function goToPrevSlide() {
      $(".owl-carousel").trigger('prev.owl.carousel');
    }
  
    // Asignar eventos a las flechas de navegación
    $(".owl-next").click(function() {
      goToNextSlide();
    });
  
    $(".owl-prev").click(function() {
      goToPrevSlide();
    });
  });
  