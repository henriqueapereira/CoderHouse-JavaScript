//Abstração

// function maiorQue(n){
//     return (m) => m > n
// }

// let maiorQueDez = maiorQue(10)

// console.log(maiorQue(12))
// console.log(maiorQueDez(8))

/*--------------------------------*/
// function atribuirOperacao(op){
//     if (op == "somar") {
//         return (a,b) => a + b
//     } else if (op == "subtrair") {
//         return (a,b) => a - b
//     }
// }

// let soma = atribuirOperacao("somar")
// let subtracao = atribuirOperacao("subtrair")

// console.log(soma(4,6))
// console.log(subtracao(5, 3))

/*--------------------------------*/
// let total = 0
// const numeros = [1, 2, 3, 4]

// function porCadaUm(array, funcao) {
//     for (const item of array) {
//         funcao(item)
//     }
// }

// function acumular(num){
//     total += num
// }

// porCadaUm(numeros, acumular)
// console.log(total) //10

/*--------------------------------*/
//ARROW FUNCTION (FUNÇÃO SETA)
// const quadrados = []
// const numeros = [1, 2, 3, 4]

// function porCadaUm(array, funcao) {
//     for (const item of array) {
//         funcao(item)
//     }
// }

// porCadaUm(numeros, (o) => {
//     quadrados.push(o*2)
// })

// console.log(quadrados) // [2,4,6,8]

/*--------------------------------*/
//MÉTODOS DE BUSCA E TRANSFORMAÇÃO
//forEach, find, filter, some, map, reduce, sort

// const numeros = [1, 2, 3, 4, 5, 6]
// numeros.forEach((numero) => {
//     console.log(numero)
// })

// const cursos = [
//     {
//         nome: 'JavaScript',
//         preco: 1500
//     },
//     {
//         nome: 'ReactJS',
//         preco = 2000
//     }
// ]

// const resultado = cursos.find((curso) => curso.nome === "ReactJS")
// console.log(resultado)
// const resultado2 = cursos.find((curso) => curso.nome === "Python")
// console.log(resultado)

//MÉTODO FILTER
// const cursos = [
//         {
//             nome: 'JavaScript',
//             preco: 1500
//         },
//         {
//             nome: 'ReactJS',
//             preco: 2000
//         },

//         {
//             nome: 'AngularJS',
//             preco: 3000
//         },
//         {
//             nome: 'AngulartJS',
//             preco: 4000
//         }
//     ]

// const resultadoFilter = curso.filter((curso) => curso.nome.includes("JS"))
// console.log(resultadoFilter)
// const resultadoFilter2 = curso.filter((curso) => curso.preco.includes < 2000)
// console.log(resultadoFilter2)

//MÉTODO SOME - retorna bool
// console.log(cursos.some((curso) => curso.nome === "JavaScript"))
// console.log(cursos.some((curso) => curso.nome === "AngularJS"))

//MÉTOD MAP - cria um novo array baseado em um já existente
// const nomes = cursos.map((curso) => cursos.nome)
// console.log(nomes)

// const atualizado = cursos.map((curso) => {
//     return {
//         nome: curso.nome,
//         preco: curso.preco * 1.35
//     }
// })

// console.log(atualizado)

/*--------------------------------*/
//MÉTODO REDUCE
// const numerosReduce = [1, 2, 3]
// const total = numerosReduce.reduce((acumulador, elemento=> acumulador + elemento, 0))
// console.log("Total Reduce ", total)

// const minhaCompra = [
//         {
//             nome: 'JavaScript',
//             preco: 1500
//         },
//         {
//             nome: 'ReactJS',
//             preco: 2000
//         },

//         {
//             nome: 'AngularJS',
//             preco: 3000
//         },
//         {
//             nome: 'AngulartJS',
//             preco: 4000
//         }
//     ]

// const totalMinhaCompra = minhaCompra.reduce((soma, o) => soma + o.preco, 0)
// console.log(total) //6.625

//MÉTODO SORT
//Modifica o array, ordena o array da forma desejada
//Ordenando por crescente e decrescente
// const numeros = [40, 1, 5, 2002]
// var crescente = numeros.sort((a,b) => a - b)
// console.log(crescente)
// var decrescente = numeros.sort((a,b) => b - a)
// console.log(decrescente)

//ordedando por ordem alfabética
// const itens = [
//     { nome: 'Pikachu', preco: 21},
//     { nome: 'Chamander', preco: 37},
//     { nome: 'Pidgey', preco: 45},
//     { nome: 'Squirtle', preco: 60}
// ]

// itens.sort((a, b) => {
//     if (a.nome > b.nome) {
//         return 1
//     }

//     if (a.nome < b.nome) {
//         return -1
//     }
//     return 0
// })
// console.log(itens)
 
const produtos = [
    { id: 1, nome: "Arroz", preco: 125 },
    { id: 2, nome: "Macarrão", preco: 70 },
    { id: 3, nome: "Pão", preco: 50 },
    { id: 4, nome: "Pudim", preco: 100 }
]
   const busca = produtos.find(produto => produto.id === 3)
   console.log(busca) //{id: 3, produto: "Pão", preco: 50}
   const existe = produtos.some(produto => produto.nome === "Farinha")
   console.log(existe) // false
   const baratos = produtos.filter(produto => produto.preco < 100)
   console.log(baratos)
   // [{id: 2,produto:"Macarrão",preco:70},{id:3,produto:"Pão",preco: 50}]
   const listaNomes = produtos.map((produto) => produto.nome);
   console.log(listaNomes); //["Arroz", "Macarrão", "Pão", "Pudim"]
