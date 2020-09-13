$(".owl-carousel").owlCarousel({
  loop: true, //deixa efeito loop pra vc navegar infinitamente
  margin: 10, //margin entre os blocos de items
  nav: true, //botao de navegacao, pode desabilitar usando false
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3, //3 items em tela de 600
    },
    1000: {
      items: 5, //tela com + de 1000px ela poe 5 items
    },
  },
});
