//Funciona como um compilado de ferramentas e métodos usados para realizar operações matemáticas.
/*
console.log( Math.E ) // 2.718281828459045
console.log( Math.PI ) // 3.141592653589793
*/
// Min & Max
// Os métodos de Math.min() e Math.max() recebem uma série de argumentos numéricos e retornam aquele
// com o valor máximo ou mínimo correspondente
/*
console.log(Math.max(55, 13, 0, -25, 93, 4)) // 93
console.log(Math.min(55, 13, 0, -25, 93, 4)) // -25
*/
// Min & Max
// Também é possível referenciar os valores do infinito positivo ou negativo através da variável global Infinity,
// do tipo number
/*
console.log(Math.max(55, Infinity, 0, -25, 93, 4)) // Infinity
console.log(Math.min(55, 13, 0, -Infinity, 93, 4)) // -Infinity
*/
// Ceil, Floor & Round
// Servem para arredondar um valor numérico em um número inteiro próximo
/*
const pi = Math.PI // 3.141592653589793
// CEIL: retorna o número inteiro maior ou igual mais próximo
console.log(Math.ceil(pi)) // 4
// FLOOR: retorna o número inteiro mais próximo arredondado para baixo
console.log(Math.floor(pi)) // 3
// ROUND: retorna o valor de um número arredondado, o número inteiro mais
próximo
console.log(Math.round(pi)) // 3
*/
// Square
// O método Math.sqrt() retorna a raiz quadrada de um número. Se enviar um número negativo, o método
// retorna NaN.
/*
console.log(Math.sqrt(9)) // 3
console.log(Math.sqrt(2)) // 1.414213562373095
console.log(Math.sqrt(1)) // 1
console.log(Math.sqrt(-1)) // NaN
*/
// Random
// O método Math.random() gera um número pseudoaleatório entre 0 e 1, sendo 0 o limite inclusivo e
// o 1 exclusivo
/*
console.log(Math.random()) // 0.6609867980868442
console.log(Math.random()) // 0.09291446900104305
console.log(Math.random()) // 0.6597817047013095
*/
// Random
// Para gerar números aleatórios dentro de um conjunto desejado, diferente de 0-1, podemos
// multiplicar seu resultado pelo conjunto esperado.Além disso, podemos somar o limite inferior se for
// necessário.Para obter números inteiros aleatoriamente, que normalmente são mais usados, combina-se esse
// resultado com as funções de arredondamento
/*
// números entre 0 e 10
console.log(Math.random() * 10)
// números entre 0 e 50
console.log(Math.random() * 50)
// números entre 20 e 50
console.log(Math.random() * 30 + 20)
*/
// Arredondamento
// Ao usar Math.round, a função retornará números aleatórios no conjunto de 0 a 100.
// Se usar Math.ceil, os números irão de 1 a 100, já que sempre arredondará para cima.
// Se usar Math.floor, o conjunto seria de 0 a 99.
/*
const geradorNumero = () => {
    return
   Math.round(Math.random() * 100)
   }
   console.log(geradorNumero())
*/

//Para praticar
//Descrição da atividade.
//✓ Crie uma função que gera um número aleatório entre 20 e 50.
//✓ Crie uma função que receba um número e gere um array com a quantidade de números aleatório
//informado pelo usuário (use a função criada anterior).
//✓ Crie uma função que crie um novo array, com a raiz quadrada de todos os números do array anterior.
//✓ Exiba como resultado os dois arrays.
// function geraNumero() {
//     return Math.floor(Math.random() * 30 + 20 )
// }
// console.log(geraNumero())

// function gerarArrayDeNumerosAleatorios(quantidadeDeNumeros){
//     const array = []
//     for (let i = 0; i < quantidadeDeNumeros; i++) {
//         array.push(geraNumero())
//     }
//     return array
// }

// function calcularRaizDosNumerosDoArray(array){
//     return array.map(numero => Math.sqrt(numero))
// }

// const numerosAleatorios = gerarArrayDeNumerosAleatorios(5)
// const raizesQuadradas = calcularRaizDosNumerosDoArray(numerosAleatorios)

// console.log("Array de numeros aleatórios ", numerosAleatorios)
// console.log("Array de raizes quadradas ", raizesQuadradas)

//Classe Date - manipulação de datas
// console.log(new Date())
// Mon May 01 2023 11:39:55 GMT-0300 (Horário Padrão de Brasília)

// Construtor
// O construtor da classe Date nos permite criar objetos date com datas diferentes. Ele pode
// receber parâmetros nesta ordem: ano, mês, dia, hora, minutos, segundos e
// milissegundos (todos do tipo number)

// A convenção com a que se trabalha no JavaScript para construir datas conta os meses a partir
// do 0 (0 = janeiro, 11 = dezembro) e os dias a partir do 1:

// console.log(new Date(2023, 1, 25))
// Sat Feb 25 2023 00:00:00 GMT-0300 (Horário Padrão de Brasília)
// const quaseNatal = new Date(2024, 11, 24, 23, 59, 59)
// console.log(quaseNatal)
// Wed Dec 24 2024 23:59:59 GMT-0300 (Horário Padrão de Brasília)

// Também pode criar uma data a partir de uma string com formato específico:
// const quaseNatal = new Date("December 24, 2021 23:59:59")
// console.log(quaseNatal)
// Fri Dec 24 2021 23:59:59 GMT-0300 (Horário Padrão de Brasília)

// Hands on lab
// ✓ Criar uma data com nosso dia e
// horário de nascimento.
// ✓ Criar uma função para descobrir nosso
// signo. Para isso utilizaremos a tabela ao lado como referência.
// const aniversarioHenrique = new Date("September 20, 1993 05:00:00")
// console.log(aniversarioHenrique)

// function obterSigno(daatNascimento){
//     const dia =  dataNascimento.getDate()
//     const mes = dataNascimento.getMonth() + 1


//     if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20)){
//         return "Aries"
//     } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 3)) {
//         return "Touro"
//     } else {
//         return "Virgem"
//     }
// }

// const dataNascimento = new Date('1993-09-20T05:00:00')
// const signo = obterSigno(dataNascimento)
// console.log(signo)

//Valor singular
// const data = new Date("December17, 2024")
// console.log(data.getFullYear())// 2024
// console.log(data.getMonth()) //11 (dezembro)
// console.log(data.getDay()) // 2 (terça)

// const data = new Date("December 17, 2024")
// console.log(data.toDateString()) // Tue Dec 17 2024
// console.log(data.toLocaleString()) // 17/12/2024, 00:00:00
// console.log(data.toLocaleDateString()) // 17/12/2024
// console.log(data.toTimeString()) // 00:00:00 GMT-0300 (Horário Padrão de Brasília)

// Para praticar
// ✓ Crie uma função que recebe uma data e exibe ela de 3
// maneiras diferentes;
// ✓ Para testar, envie a sua data de nascimento.

// function formatarData(data) {

// // Opçoes 1: Exibir no formato padrão
// const op1 = data.toLocaleString()
// console.log(op1)
// //Opcoes 2: DD/MM/YYYY
// const op2 = `${data.getDate().toString().padStart(2,0)}/${(data.getMonth() + 1).toString().padStart(2,0)}/${data.getFullYear()}`
// console.log(op2)

// //Opcoes 2: YYYY-MM-DD
// const op3 = `${data.getFullYear()}-${(data.getMonth() + 1).toString().padStart(2,0)}-${data.getDate().toString().padStart(2,0)}`
// console.log(op3)
// }

// const dataNascimento = new Date("1997-09-08");
// formatarData(dataNascimento)

//Diferença entre datas
// const natal = new Date("December 25, 2024")
// const data = new Date("December 10, 2024")
// console.log(natal - data) // 1296000000
// const milissegundosPorDia = 86400000
// console.log((natal - data) / milissegundosPorDia) //15

// const inicio = new Date()
// for (let i = 0; i < 1000; i++) {
//  console.log("contando tempo")
// }
// const final = new Date()
// console.log("O processo demorou: " + (final - inicio) + "milissegundos")
// O processo demorou: 787 milissegundos

//Quarto Exercicio
// ✓ Receba uma data do usuário
// ✓ Calcule a diferença de semanas, dias, horas, minutos e segundos
// entre a data informada e a data de hoje

function diasParaFazerAniversario(dataAniversario) {
    const hoje = new Date()
  
    const proximoAniversario = new Date(hoje.getFullYear(), dataAniversario.getMonth(), dataAniversario.getDate())
  
    if (hoje > proximoAniversario){
      proximoAniversario.setFullYear(hoje.getFullYear() + 1) 
    }
  
    const diferenca = proximoAniversario - hoje
    const diasFaltando = Math.ceil(diferenca / ( 1000 * 60 * 60 * 24))
    
    return diasFaltando
  }
  
  const dataAniversario = new Date("1997-08-08")
  const diasFaltando = diasParaFazerAniversario(dataAniversario)
  console.log(diasFaltando)