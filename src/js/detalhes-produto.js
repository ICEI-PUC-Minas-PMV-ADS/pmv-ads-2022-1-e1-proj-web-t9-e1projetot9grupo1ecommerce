$(document).ready(event => {
    carregarDetalhesProduto();
});

let produto;

function carregarDetalhesProduto() {
    
    var url = new URL(window.location.href);
    var idProduto = url.searchParams.get("produto");
    
    produto = listaProdutos.find(p => p.id == idProduto)
    console.log(produto)

}

async function adicionarCarrinho() {

    let carrinho = await getCarrinho();

    carrinho.produtos.push(produto);

    await saveCarrinho(carrinho);

}