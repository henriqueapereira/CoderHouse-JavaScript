//Operador ternário
//sintaxe
//condição ? caso1 : caso2

// let temperatura = 31 
// temperatura > 30 ? alert("Dia quente!") : alert("Dia agradável")

// const usuario = {
//     nome: "Maria",
//     idade: 20
// }
// usuario.idade >= 18 ? alert("Pode comprar cerveja") : alert("Não pode comprar")


//Operador lógico And
// const carrinho = []
// como já conhecemos
// if (carrinho.length === 0) {
//  console.log("O carrinho está vazio!")
// }
// com operador AND
// carrinho.length === 0 && console.log("O carrinho está vazio!")

// Também tem um return implícito. Neste exemplo, se o
// usuário tiver 18 anos ou mais, uma nova data será
// armazenada na variável:

// const usuario = {
//     nome: "Maria",
//     idade: 20   
// }
// const registroAcesso = usuario.idade >= 18 && new Date()
// console.log(registroAcesso)

//Operador lógico OR
// OR ( || ) é sintaticamente semelhante ao anterior, com a
// diferença de que consiste de dois operandos e não de uma
// condição explícita: operando1 || operando2.
// Se não for falsy (se for diferente de 0, null, undefined, NAN,
// false, ou string vazio), o operador OR ( || ) retorna operador1.
// Caso contrário, retorna operador2.

// console.log(0 || "Falsy") // Falsy
// console.log(40 || "Falsy") // 40
// console.log(null || "Falsy") // Falsy
// console.log(undefined || "Falsy") // Falsy
// console.log("Olá Mundo" || "Falsy") // Olá Mundo
// console.log("" || "Falsy") // Falsy
// console.log(NaN || "Falsy") // Falsy
// console.log(true || "Falsy") // true
// console.log(false || "Falsy") // Falsy

// const usuario1 = {
//     nome: "Maria",
//     idade: 16
// }
// const usuario2 = null
// console.log(usuario1 || "O usuário não existe")// { nome: 'Maria', idade: 16 }
// console.log(usuario2 || "O usuário não existe")// O usuário não existe

// let carrinho
// const carrinhoAnterior = ['mouse','teclado', 'monitor']
// if (carrinhoAnterior) {
//  carrinho = carrinhoAnterior
// } else {
//  carrinho = []
// }
// console.log(carrinho)

// simplificar o processo com o operador lógico OR ( || ).

// const carrinhoAnterior = ['mouse','teclado', 'monitor']
// let carrinho = carrinhoAnterior || []
// console.log(carrinho)

//Operador Nullish Coalescing
// O Operador Nullish Coalescing (??) funciona da
// mesma forma que o Operador OR ( || ), a diferença é
// que admite mais valores como 'verdadeiros'.
// Neste caso, apenas obtemos Nullish em dois casos:

// console.log(0 ?? "Nullish") // 0
// console.log(40 ?? "Nullish") // 40
// console.log(null ?? "Nullish") //Nullish
// console.log(undefined ?? "Nullish") //Nullish
// console.log("Olá Mundo" ?? "Nullish") // Olá Mundo
// console.log("" ?? "Nullish") // ""
// console.log(NaN ?? "Nullish") // NaN
// console.log(true ?? "Nullish") // true
// console.log(false ?? "Nullish") //false

//Acesso condicional a um objeto
// const usuario = null
// console.log(usuario.nome || "O usuário não existe")// Erro: "Não é possível ler as propriedades de NULL"
// console.log(usuario?.nome || "O usuário não existe")// "O usuário não existe"

// let usuario = {
//     nome: "Maria",
//     idade: 16,
//     cursos: {
//     javascript: "aprovado"
//     }
// }
// console.log(usuario?.cursos?.javascript ||"A propriedade não existe")// "aprovado"
// console.log(usuario?.trabalhos?.coderhouse || "A propriedade não existe")// "A propriedade não existe"

//Desestruturação
// Muitas vezes queremos acessar propriedades de
// objetos e armazená-las em variáveis diferentes para
// usar depois. Normalmente, para isso faríamos o seguinte:

// const usuario = {
//     nome: "Maria",
//     idade: 16,
// }
// let nome = usuario.nome
// let idade = usuario.idade
// console.log(nome, idade) // Maria 16

// let { prop1, prop2 } = objeto

// const usuario = {
//     nome: "Maria",
//     idade: 16,
// }
// const { nome, idade } = usuario
// console.log(nome, idade) // Maria 16

// const usuario = {
//     nome: "Maria",
//     idade: 16,
//     telefone: {
//         cel: 113334444,
//         casa: null,
//         trabalho: 113325555
//     }
// }
// const { nome, telefone: { trabalho } } = usuario
// console.log(nome) // "Maria"
// console.log(trabalho) // 113325555

//@ALIAS

// const item = {
//     item_id: 432,
//     product_name: "Camiseta",
//     price_per_unit: 5600
// }

// const { 
//     item_id: id,
//     product_name: produto,
//     price_per_unit: preco
// } = item

// console.log(id, produto, preco)
//--
// const produtoCurso = {
//     id: 10,
//     nome: "Curso de JavaScript",
//     preco: 12500
// }

// function desestruturar({ id, nome}) {
//     console.log(id, nome)
// }

// desestruturar(produtoCurso)

//@Desestruturar Arrays
// const nomes = ["Paulo", "Fabio", "Lais", "Anna"]
// const [,,a,b] = nomes
// console.log(a,b)

//Spread
// console.log(nomes)
// console.log(...nomes)
// console.log("Paulo", "Fabio", nomes[2])

//Spread de Arrays
//Sem spread
// const números = [4, 77, 92, 10, 3, -32, 54,11]
// console.log(Math.max(números)) // NaN

//Aplicando Spread
const números = [4, 77, 92, 10, 3, -32, 54, 11]
console.log(Math.max(...números)) // 92