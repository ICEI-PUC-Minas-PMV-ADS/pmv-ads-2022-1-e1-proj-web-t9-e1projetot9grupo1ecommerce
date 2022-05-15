
$(document).ready(()=>{
    
    
    // Aqui chamamos o objeto window e neles colocamos o método de escutar um evento, que no caso é o Resize, que basicamente vê o tamanhoa de uma página.

    // Chamamos uma função que contém um IF, se ele for verdade, ele entrá na condição que declara a variável, chama a função de fechar menu  e executa um slide toggle para a posição 0
    window.addEventListener('resize', () => {

        let largura = window.innerWidth;
        let menuMobile = document.querySelector('.mobile-menu');
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


window.onload = function (){
    $('.icon').click(function () {
        $(`.mobile-menu`).slideToggle("slow")
    });
    
}


let menuMobile = document.querySelector('.mobile-menu');

// Essa função é a openMenu, está registrada num evento de onclick em um botão, essa função serve para abrir e fechar o menu

function openMenu() {
    let menuMobile = document.querySelector('.mobile-menu');


    if (menuMobile.classList.contains('open')) {

        fecharMenu();

    } else {

        abrirMenu();
    }

}


// Essa função vai trocar o ícone e também habilitar o menu de acordo com a classe que ele possui la no css.
function abrirMenu (){
    let menuMobile = document.querySelector('.mobile-menu');

    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./src/assets/close_white_36dp.svg";


}

// Essa função vai trocar o ícone e também habilitar o menu de acordo com a classe que ele possui la no css.
function fecharMenu (){
    let menuMobile = document.querySelector('.mobile-menu');
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./src/assets/menu_white_36dp.svg";

}

// Função de animação usando jquery
