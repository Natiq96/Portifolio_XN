const menuButton = document.querySelector('.menu_button');
const solidBar = document.querySelector('.solidbar');
const close = document.querySelector('.close');
const aboutCon = document.querySelector('.about-container');
const aboutWs = document.querySelector('.about-ws');
const contactmeWs = document.querySelector('.contactme-ws');
menuButton.addEventListener('click', () => {
  solidBar.style.display = 'flex';
  aboutCon.style.display = 'none'
  aboutWs.style.display = 'none'
  contactmeWs.style.display = 'none'
});

close.addEventListener('click',() =>{
    solidBar.style.display = "none"
    aboutCon.style.display = 'block'
    aboutWs.style.display = 'block'
    contactmeWs.style.display = 'block'
})