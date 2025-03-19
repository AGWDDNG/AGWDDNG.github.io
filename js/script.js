// Funzione per lo scroll fluido
function scrollToSection(targetId) {
  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
}

// Aggiungi l'evento di click ai pulsanti freccia e Home
document.querySelectorAll('.arrow-button, .cta-button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('data-target') || this.getAttribute('href');
    scrollToSection(targetId);
  });
});

const homeButton = document.getElementById('home-button');
const detailsSection = document.getElementById('details');

document.body.addEventListener('scroll', () => {

  const detailsTop = detailsSection.getBoundingClientRect().top;

  if (detailsTop < window.innerHeight) {
    homeButton.style.display = 'block'; // Mostra il bottone
  } else {
    homeButton.style.display = 'none'; // Nascondi il bottone
  }
});

homeButton.addEventListener('click', () => {
  scrollToSection("#home");
  homeButton.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
  var toggleButton = document.getElementById("iban-toggle-btn");
  var ibanContainer = document.getElementById("iban-container");

  toggleButton.addEventListener("click", function () {
    if (ibanContainer.style.display === "none") {
      ibanContainer.style.display = "block";
    } else {
      ibanContainer.style.display = "none";
    }
  });
});
