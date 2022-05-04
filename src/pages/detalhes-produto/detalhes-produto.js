$(document).ready(event => {
    carregarDetalhesProduto();
});

function carregarDetalhesProduto() {
    
    var url = new URL(window.location.href);
    var idProduto = url.searchParams.get("produto");
    
    console.log(idProduto)
}