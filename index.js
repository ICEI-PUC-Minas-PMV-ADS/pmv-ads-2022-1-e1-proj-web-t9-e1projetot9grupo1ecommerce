$(document).ready(event => {
    window.localStorage.setItem('produtos', JSON.stringify(listaProdutos));

    setTimeout(() => {
        if(!window.localStorage.getItem('aceite-termos')){
            document.querySelector(".cookie-container").classList.add("cookie-container-show")
    
        }
    },2000)

});

/**
 * Load da vitrine de produtos da pagina inicial
 */
$(() => {
    $("#produtos").load("produtos.html");
});


/**
 * Função deve enviar os dados do e-mail para armazenar na lista de tramissões das ofertas
 */
function enviarCadastroOfertas() {
    
    if(document.getElementById('nome-cadastre-ofertas').value && document.getElementById('email-cadastre-ofertas').value) {

        var nome = document.getElementById('nome-cadastre-ofertas').value;
        var email = document.getElementById('email-cadastre-ofertas').value;

        // LIMPAR FORMULARIO
        document.getElementById('nome-cadastre-ofertas').value = null;
        document.getElementById('email-cadastre-ofertas').value = null;

        // EXIBIR DADOS NA TELA
        // SET TIMEOUT PARA LIMPAR OS DADOS ANTES DE DAR O ALERT
        setTimeout(() => {
            alert(`
                Nome: ${nome}
                E-mail: ${email}
            `);
        })

    }

}

function fecharpopup() {
    window.localStorage.setItem("aceite-termos", true)

    const cookieContainer = document.querySelector(".cookie-container");
    cookieContainer.classList.remove("cookie-container-show")
}