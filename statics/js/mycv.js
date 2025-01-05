const menuButton = document.querySelector('.menu_button');
const solidBar = document.querySelector('.solidbar');
const close = document.querySelector('.close');
const PdfDownloader = document.querySelector('.pdf_downloader_container')
menuButton.addEventListener('click', () => {
  solidBar.style.display = 'flex';
  PdfDownloader.style.display = 'none'
});

close.addEventListener('click',() =>{
    solidBar.style.display = "none"
    PdfDownloader.style.display = "flex"
})