const menuButton = document.querySelector('.menu_button');
const solidBar = document.querySelector('.solidbar');
const close = document.querySelector('.close');
const natigShukurov = document.querySelector('.natigShukurov')
menuButton.addEventListener('click', () => {
  solidBar.style.display = 'flex';
  natigShukurov.style.display = 'none'
});

close.addEventListener('click',() =>{
    solidBar.style.display = "none"
    natigShukurov.style.display = "flex"
})