const produtos ={
    precoOriginal: 100,
    precoVenda: 95
}

function verificarPromocao(precoOriginal, precoVenda) {
    if( precoVenda <precoOriginal) {
            console.log ("Em promoção");
        } 
    else {   
    return "Preço regular";
        }
}
    console.log(produtos.precoOriginal)