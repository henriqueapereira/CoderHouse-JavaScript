//1 - verificar se é par ou impar
/*
function verificarParOuImpar(numero){
    if(numero % 2 == 0) {
        return "Par"
    } else {
        return "False"
    }
}

let numero = 8;
console.log(verificarParOuImpar(numero))
*/

//2 - verificar estação do ano
/*
function identificarEstacaoDoAno(mes) {
    if (mes >= 1 && mes <= 3){
        return "Verao"
}   else if (mes >= 4 && mes <= 6) {
        return "Outono"
}
}
let mes = 4
console.log(identificarEstacaoDoAno(mes));
*/

//3 - converter celsiu para faranheit
/*
function conversaoDeTemperatura(temperatura) {
    return (temperatura - 32) * 5/9
}
let temperatura = 68;
let temperaturaConvertida = conversaoDeTemperatura(temperatura)
console.log(`A temperatura em Celsius é ${temperaturaConvertida}`)
*/

//4 - pedir numero p/ usuario até que ele seja primo
/*
function verificarNumeroPrimo() {
    let numero = parseInt("Digite um numero: ")

    while(!isPrimo(numero)) {
        numero = parseInt(prompt("Digite um numero valido. Tente novamente"))
    }
    console.log(`O numero: ${numero} é primo`)
}

function isPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) return false
    return numero !==1
    }

    verificarNumeroPrimo()
    
}
*/

//5 - fazer um somatorio
/*
function calcularSomatorio(somatorio) {
    let somatorio = 0
    for (let i = 1; i <= numero; i++) {
        somatorio += i
    }
    return somatorio
}

let numero = 5
console.log(`O somatorio de 1 a ${numero} é: ${calcularSomatorio}`)
*/

//6- Função que retorne o cubo
/*
function cubo(numero) {    
    return numero ** 3
}

let numero = parseInt(prompt("Digite um numero"))
console.log(`O cubo de ${numero} é ${cubo(numero)}`)
*/

//7- n1 é divisil por n2
/*
function verificarDivisibilidadde(num1, num2) {
    if(num1 % num2 === 0) {
        return `${num1} é divisivil por ${num2}`
    } else {
        return `${num1} não é divisivel por ${num2}`
    }
}

let primeiroNumero = 11
let segundoNumero = 5
console.log(verificarDivisibilidadde(primeiroNumero, segundoNumero))

*/

//8- 
/*
let numeroMes;

do {
    numeroMes = parseInt(prompt("Digite um numero de 1 a 12 (ou 0 para sair)"))
    if (numeroMes >= 1 & numeroMes <= 12) {
        let nomeMes;

        switch(numeroMes) {
            case 1:
                nomeMes = "Jan"
                break
            case 2:
                nomeMes = "Fev"
                break
            default:
                break
            }
            console.log(`O mês correspondente é ${nomeMes}`)
            
    } else if(numeroMes !== 0) {
        console.log("Valor do mês incorreto")
    }
} while (numeroMes !== 0)
*/

//9- Calcular Potencia
function calcularPotencia (base, expoente) {
    return Math.pow(base, expoente)
}

let base = 2
let expoente = 3
console.log(`${base} elevado a ${potencia} é = ${calcularPotencia}`)


