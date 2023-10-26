/* =========== Mostrar barra de navegação =========== */
const header = document.querySelector('.header');
const scrollLink = document.querySelectorAll('.navbar a:not(:last-child)');

Array.from(scrollLink).map((link) => {
  link.addEventListener('click', (e) => {

    e.preventDefault();

    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);
    let position = element.offsetTop - 90;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: 'smooth',
    });
    navbar.classList.remove('show');
  });
});

/* =========== Posição de rodagem =========== */

/* =========== Rodagem suave =========== */

/* =========== Pre-carregamento =========== */
const preloader = document.querySelector(".preloader");

window.addEventListener("load", () => {
  setTimeout(() => {
    preloader.style.display = "none";
  }, 2000);
});


/* =========== Rodagem superior =========== */
