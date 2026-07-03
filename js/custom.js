// HEADER ************************************************
var CSbody = document.querySelector("body");
const CSnavbarMenu = document.querySelector("#header");
const CShamburgerMenu = document.querySelector("#header .cs-toggle");

CShamburgerMenu.addEventListener('click', function() {
    CShamburgerMenu.classList.toggle("cs-active");
    CSnavbarMenu.classList.toggle("cs-active");
    CSbody.classList.toggle("cs-open");
    ariaExpanded();
});

function ariaExpanded() {
    const csUL = document.querySelector('#cs-expanded');
    const csExpanded = csUL.getAttribute('aria-expanded');

    if (csExpanded === 'false') {
        csUL.setAttribute('aria-expanded', 'true');
    } else {
        csUL.setAttribute('aria-expanded', 'false');
    }
}

const dropDowns = Array.from(document.querySelectorAll('#header .cs-dropdown'));
for (const item of dropDowns) {
    const onClick = () => {
    item.classList.toggle('cs-active')
}
item.addEventListener('click', onClick)
}

// MODAL ************************************************
const modal = document.getElementById("contactModal");

function openModal() {
    modal.classList.add("show");
}

function closeModal() {
    modal.classList.remove("show");
}

window.onclick = function(event) {
    if (event.target === modal) {
    closeModal();
    }
}

// MEDIUM ZOOM ************************************************
document.addEventListener('DOMContentLoaded', function() {
    // Inizializza lo zoom su tutte le immagini con classe "zoom-img" (class="zoom-img")
    mediumZoom('.zoom-img', {
        margin: 24,
        background: '#ffffff',
        scrollOffset: 40
    });

    // punta alle imgs che vuoi tu inserendo le classi che utilizzi -> al posto di 'img' metti '#gallery-42 .cs-picture img'
    mediumZoom('img', {
        margin: 24,
        background: 'rgba(255, 255, 255, 0.95)'
    });
});

// EMBLA CAROUSEL ************************************************
const wrapperNode = document.querySelector('.carousel-wrapper')
const viewportNode = wrapperNode.querySelector('.carousel-window')
const prevButtonNode = wrapperNode.querySelector('.btn-prev')
const nextButtonNode = wrapperNode.querySelector('.btn-next')

// Inizializzazione
const emblaApi = EmblaCarousel(viewportNode, { loop: true })

// Eventi dei pulsanti
prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false)
nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false)

// ANIMATION ************************************************
const elementi = document.querySelectorAll('.animation');

// Crea l'osservatore
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // Opzionale: smetti di osservare se vuoi che l'animazione avvenga una sola volta
      observer.unobserve(entry.target); 
    }
  });
}, {
  threshold: 0.4 // L'animazione parte quando il 40% dell'elemento è visibile
});

elementi.forEach((el) => observer.observe(el));