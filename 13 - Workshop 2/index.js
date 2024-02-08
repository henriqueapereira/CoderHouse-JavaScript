//1. Condicionais
// let nomeInserido = prompt("Inserir nome");
// if ((nomeInserido != "") && ((nomeInserido == "EMA") ||
// (nomeInserido == "ema"))) {
//  alert("Olá, Ema");
// } else {
//  alert("Erro: Inserir um nome válido");
// }

//2. Funções
// const soma = (a, b) => { return a + b};
//Se for uma função de uma só linha com retorno, não é necessário escrever o corpo.
// const subtracao = (a, b) => a - b;
// function multiplicacao(a, b) {
//  return a * b;
// }
// console.log(soma(15, 20));
// console.log(subtracao(20, 5));
// console.log(multiplicacao(2, 6));

//3. Escopo
// var nome = "Maria" // variável global
// function saudacao() {
//  var nome = "João" // variável local
//  console.log(nome) // -> "João"
// }
// //Acessa nome local
// saudacao()
// //Acessa nome global
// console.log(nome) // -> "Maria"

//4. Contexto
// var nome = "Lucas"
// function obterNome() {
//  this.nome = "Jonas"
//  console.log(this.nome) //Jonas
// }
// new obterNome()
// console.log(this.nome) //Lucas

//5. Loops
// let entrada = prompt("Inserir um dado");
// //Repetimos com while até que o usuário insira "sair"
// while (entrada != "sair") {
//  alert("O usuário inseriu " + entrada); //Voltamos a solicitar um dado. Na próxima iteração, verificamos se não é ESC.
//  entrada = prompt("Inserir outro dado");
// }

//6. Objetos
// function Pessoa(nome, idade, rua) {
//     this.nome = nome;
//     this.idade = idade;
//     this.rua = rua;
//     this.falar = function () {
//    console.log("OLÁ, SOU " + this.nome) }
//    }
//    const pessoa1 = new Pessoa("Homer", 39,"Av. Sempre-verde 742");
//    const pessoa2 = new Pessoa("Marge", 36,"Av. Sempre-verde 742");
//    pessoa1.falar();
//    pessoa2.falar();

//7. Array
// const numeros = [1, 2, 3, 4, 5];
// console.log(numeros.length)
// numeros.push(6)
// console.log(numeros.length)
// numeros.shift()
// console.log(numeros.length)
// numeros.reverse()
// console.log(numeros)

//8. Funções de Ordem Superior
// const numeros = [1, 2, 3, 4, 5];
// const porDois = numeros.map(x => x * 2);// porDois = [2, 4, 6, 8, 10]
// const total = numeros.reduce((acumulador,elemento) => acumulador + elemento, 0)
// console.log(total)
// const nomes = ["Ana", "Ema", "João","Elia"];
// const lengths = nomes.map(nome => nome.length);//lengths = [3, 3, 4, 4]
// const resultado = nomes.find((o) => o === "João")
// console.log(resultado)

//9. Math
// console.log(Math.max(55, 13, 0, -25, 93, 4)) // 93
//     console.log(Math.min(55, 13, 0, -25, 93, 4)) // -25
//     console.log(Math.ceil(Math.PI)) // 4
//     console.log(Math.floor(Math.PI)) // 3
//     console.log(Math.round(Math.PI)) // 3
//     console.log(Math.sqrt(100)) // 10
//     console.log(Math.random() * 30 + 20)

//10. Date
// console.log(Math.max(55, 13, 0, -25, 93, 4)) // 93
//     console.log(Math.min(55, 13, 0, -25, 93, 4)) // -25
//     console.log(Math.ceil(Math.PI)) // 4
//     console.log(Math.floor(Math.PI)) // 3
//     console.log(Math.round(Math.PI)) // 3
//     console.log(Math.sqrt(100)) // 10
//     console.log(Math.random() * 30 + 20)

//11. Operadores Avançados
let num = 10num++
console.log(num)
const usuario = {
 nome: "Maria",
 idade: 20
}
usuario.idade >= 18 ? alert("Pode comprar cerveja") :
alert("Não pode comprar")
const registroAcesso = usuario.idade >= 18 && new Date()
console.log(registroAcesso)
console.log(usuario.nome || "O usuário não existe")
console.log(40 ?? "Nullish") // 40
console.log(null ?? "Nullish") // Nullish
console.log(false ?? "Nullish") // false
const { nome, idade } = usuario
console.log(nome, idade) // Maria 16
const nomes = ["Juan", "Julieta", "Carlos", "Mariela"]
const [, , a, b] = nomes
console.log(a, b) // "Mariela"
console.log(...nomes) 