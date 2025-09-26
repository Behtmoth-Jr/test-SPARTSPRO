const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
const header = document.getElementById('header');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
  header.classList.toggle('active');
})