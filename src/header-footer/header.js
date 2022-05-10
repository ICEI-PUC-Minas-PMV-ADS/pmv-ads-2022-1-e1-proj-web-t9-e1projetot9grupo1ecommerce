
$(document).ready(()=>{
    
    
    
    window.addEventListener('resize', () => {

        let largura = window.innerWidth;
    
        if (largura > 768) {
            if (menuMobile.classList.contains('open')) {
                //console.log('entrou')
                let menuMobile = document.querySelector('.mobile-menu');
                fecharMenu();
                $(`.mobile-menu`).slideToggle(0)
    
            }
        }
    })
}) 

let menuMobile = document.querySelector('.mobile-menu');

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
    document.querySelector('.icon').src = "/src/assets/close_white_36dp.svg";


}

function fecharMenu (){
    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "/src/assets/menu_white_36dp.svg";

}

// Função de animação usando jquery
