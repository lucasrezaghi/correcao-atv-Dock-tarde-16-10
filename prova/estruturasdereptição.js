let marca = 'bmw'
if(marca == 'bmw' || 'forza'){
    console.log('tenho o carro dos sonhos')
}else{
    console.log('ainda estou na luta')
}


let lista = ['lucas','julia','pai','julios','moe'];
for(var i=0; i <= 4; i ++){
    console.log(lista[i])
}
let agora = new Date()
let hora = agora.getHours()
console.log(`agora são exatamente ${hora} horas.`)
if(hora <= 12){
    console.log('bom dia')
}else if(hora <= 18){
    console.log('boa tarde')
}else if(hora >= 18){
        console.log('boa noite')
}


let dias = new Date()
var diaSem = dias.getDay()
switch(diaSem) {
    case 0:
        console.log('domingo')
    break
    case 1:
        console.log('segunda')
    break
    case 2:
        console.log('terça')
    break
    case 3:
        console.log('quarta')

    break
    case 3:
        console.log('quarta')

    break
    case 4:
    console.log('quinta')
    break
    case 5:
    console.log('sexta')
    break
    case 6:
    console.log('sabado')
    break
    default :
    console.log(' [ERRO] dia inválido')
}





