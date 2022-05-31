
$(document).ready(event => {

    $("#header").load("../header-footer/header.html");
    $("#footer").load("../header-footer/footer.html");

}) 



/* Popup Cookie

const cookieContainer = document.querySelector(".cookie-container");
const cookieButton = document.querySelector(".cookie-btn");

cookieButton.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);




/*     
    // Função de animação usando jquery

        $('.btn-mobile-menu').click(function () {
        $(`.mobile-menu`).slideToggle("100")
        });

    // Retirar as paradinhas quando reajustar a janela

   

});




function openMenu() {
    
    let menuMobile = document.querySelector('.mobile-menu');

    if (menuMobile.classList.contains('open')) {

        fecharMenu();

    } else {

        abrirMenu();
    }

}


 



function abrirMenu (){
    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "src/assets/close_white_36dp.svg";
}

function fecharMenu (){
    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "src/assets/menu_white_36dp.svg";

}


window.addEventListener('resize', () => {
    let menuMobile = document.querySelector('.mobile-menu');
    let largura = window.innerWidth;

    if (largura > 768) {
        if (menuMobile.classList.contains('open')) {
            console.log('entrou')
            
            fecharMenu();
            $(`.mobile-menu`).slideToggle(0)

        }
    }
}) */