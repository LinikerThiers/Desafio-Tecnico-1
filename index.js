document.querySelector('#app').innerHTML = `
    <h1>Digite um número inteiro e retornará a soma dos inteiros divisíveis por 3 e 5 anteriores ao número escolhido: </h1>

    <div id="div-input">
        <input type="number" id="numero-escolhido" placeholder="Digite aqui...">
        <input type="submit" id="fazer-calculo" value="Fazer Calculo">
    </div>

    <div id="div-resultado">
    
    </div>

`
// Parte da Lógica 

const inputNumero = document.querySelector('#numero-escolhido')
const inputSubmit = document.querySelector('#fazer-calculo')
let divResultado = document.querySelector('#div-resultado')

const calcular = () => {
    let numeroEscolhido = Number(inputNumero.value.replace(',', '.'))
    let resultado = 0

    if (numeroEscolhido < 0) {
        divResultado.innerHTML = `<h1>Erro: Insira um número inteiro maior do que zero</h1>`
    } else if (!Number.isInteger(numeroEscolhido)) {
        divResultado.innerHTML = `<h1>Insira um valor INTEIRO!</h1>`
    } else {
        for (let i = 0; i < numeroEscolhido; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                resultado += i
                divResultado.innerHTML = `<h1>O resultado da soma dos inteiros divisíveis por 3 e 5 anteriores ao numero ${numeroEscolhido} é ${resultado}</h1>`
            }

        }

    }
    inputNumero.value = ''
}

//Evento para quando pressionar a tecla enter ativar o input submit
inputNumero.addEventListener('keypress', (e) => {
    let key = e.which || e.keyCode 
    if (key == 13) {
        calcular()
    }
})

document.querySelector('#fazer-calculo').addEventListener('click', calcular)


