document.querySelector('#app').innerHTML = `
    <h1>Digite um número inteiro e retornará a soma dos inteiros divisíveis por 3 e 5 anteriores ao número escolhido: </h1>

    <div id="div-input">
        <input type="text" id="numero-escolhido" placeholder="Digite aqui...">
        <input type="submit" id="fazer-calculo" value="Fazer Calculo">
    </div>

    <div id="div-resultado">
    
    </div>

`

let divNumero = document.querySelector('#numero-escolhido')
let divResultado = document.querySelector('#div-resultado')
document.querySelector('#fazer-calculo').addEventListener('click', calcular)


function calcular(){
  let numeroEscolhido = divNumero.value
  let y = 0
  let resultado = 0
    for(y = 0; y < numeroEscolhido; y++){

        if(y % 3 == 0 || y % 5 == 0){
            resultado = y + resultado
        }

    }

    divResultado.innerHTML = `<h1>O resultado da soma dos inteiros divisíveis por 3 e 5 anteriores ao numero ${numeroEscolhido} é ${resultado}</h1>`

}


