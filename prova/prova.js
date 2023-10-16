// Calculadora de Descontos
const produto = {
  calca: "jeans",
  preco: 100
};
//função aplicaDesconto
function aplicaDesconto(produto, desconto) {
  if (desconto >= 0 && desconto <= 100) {
    //preço com desconto
    const descontoDecimal = desconto / 100;
    const precoComDesconto = produto.preco * (1 - descontoDecimal);

    // Atualizar o preço do produto
preco = precoComDesconto;

    //preço atualizado
    return precoComDesconto;
  } else {
    //mensagem de erro
    console.log("Erro: O desconto deve estar entre 0% e 100%.");
    return produto.preco; // Retorna o preço sem alteração
  }
}
produto.jeans = "Produto.jeans";
produto.preco = 100;


//desconto progressivo de 5% a 50%
for (var desconto = 5; desconto <= 50; desconto += 5) {
  const novoPreco = aplicaDesconto(produto, desconto);
  console.log(`${desconto}% de desconto: Preço atualizado é ${novoPreco}`);
}



  // Definir o objeto celular com as propriedades nome e temperaturaAtual
const celular = {
    nome: "celular ",
    temperaturaAtual: 51
  };

  
  // Definir temperatura maxima
  const TEMPERATURA_MAXIMA = 50;
  
  // Definir a função verificaTemperatura
  function verificaTemperatura() {
    if (celular.temperaturaAtual > TEMPERATURA_MAXIMA) {
      
     
  console.log("Alerta: O celular está superaquecido!");
    } else {
      console.log("A temperatura está segura.");
    }
  }
  
  // Chama a função para verificar a temperatura atual do celular
  verificaTemperatura();










