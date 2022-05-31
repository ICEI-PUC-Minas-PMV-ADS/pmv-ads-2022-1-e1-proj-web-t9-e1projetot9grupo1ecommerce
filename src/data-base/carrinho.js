const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);
let cart = JSON.parse(localStorage['carrinho']);

c('.product--addButton').addEventListener('click', () => {
        updateCart();
})    


function updateCart() {
    /* c('.menu-openner span').innerHTML = cart.length; */
    if (cart.quantidade > 0) {
        c('aside').classList.add('show')
        c('.cart').innerHTML = '';

        let subtotal = 0;
        let desconto = 0;
        let total = 0;
        /* 
                console.log() */
        cart.produtos.map((itemCart, index) => {

            // aqui eu comparo o item do carrinho com o item do banco
            let produtoBD = listaProdutos.find((itemDB) => itemDB.id == itemCart.id)

            // aqui monto o item do carrinho 
            let cartItem = c('.cart--item').cloneNode(true)

            // calculo de subtotal (incrementa sempre que adiciono)
            subtotal += produtoBD.preco

            // Imagem e nome
            cartItem.querySelector('.cart--item img').src = produtoBD.imagem
            cartItem.querySelector('.cart--item-nome').innerHTML = produtoBD.descricao
            
            //Remover do carrinho
            cartItem.querySelector('.cart--item-remover').addEventListener('click', () => {
                // aqui ele verifica o index e apaga ele mesmo, isso já atualiza o valor do total e etc
                // remove 1 elemento no loop do index, ou seja se for no index 4 ele remove esse elemento
                cart.produtos.splice(index, 1)

                updateCart()

                if(cart.produtos == 0){
                    localStorage.clear()
                    c('aside').classList.remove('show')
                }
            })

            c('.cart').append(cartItem)
            
        })

        /*Calculo do total*/
        desconto = subtotal *0.1
        total = subtotal - desconto 

        //Cálculo do total/ subtotal e desconto
        c('.subtotal span:last-child').innerHTML =  `R$ ${subtotal.toFixed(2)}`

        c('.desconto span:last-child').innerHTML = `R$ ${desconto.toFixed(2)}`

        c('.total span:last-child').innerHTML = `R$ ${total.toFixed(2)}`


        // Aqui é a função para fechar o menu
        c('.menu-closer').addEventListener('click', ()=>{
            c('aside').classList.remove('show')
        })


    } else {
        c('aside').classList.remove('show')
        c('aside').style.left = '100vw'
    }

}