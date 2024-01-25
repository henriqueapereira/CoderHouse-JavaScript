
// let xicara = 
//     {
//         cor:"branca",
//         forma: "redonda",
//         peso: 5,
//         capacidade: 10
//     }
// console.log(xicara)
// console.log("Cor:", xicara.cor)
// console.log("Forma:", xicara.forma)
// xicara.cor = "preta"



// let fruta = 
//     {
//         nome: "Maçã",
//         cor: "Vermelha",
//         peso: 150,
//         vitamina: "W"
//     }
// console.log(fruta)
// fruta.nome="banana"
// fruta.cor="amarelo"
// console.log("Nome: ", fruta.nome)
// console.log("Cor: ", fruta.cor)

//NEW
// function xicara(cor, forma, peso, capacidade)
//     {
//         this.cor = cor
//         this.forma = forma,
//         this.peso = peso,
//         this.capacidade = capacidade
//     }

// const xicara1 = new xicara("branca", "redonda", 5, 10)
// const xicara2 = new xicara("preta", "quadrada", 10, 15)
// console.log(xicara1)


// function fruta (nome, cor, peso, vitamina) 
//     {
//         this.nome = nome,
//         this.cor = cor,
//         this.peso = peso,
//         this.vitamina = vitamina 
//     }
// let fruta1 = new fruta("banana", "amarelo", 2, "C")
// let quantidadeDeCaracteres = fruta1.nome.length

// for(let i in fruta1)
// {
//     console.log(i + ": "+ fruta1[i])
// }

// console.log("Quantidae de caracteres: ", quantidadeDeCaracteres)
// console.log("Cor em letras maiusculas: ", fruta1.cor.toUpperCase())
// console.log("Vitamina em letras minusculas: ", fruta1.vitamina.toLowerCase())

// funções e métodos
// function pessoa(nome, idade, email)
// {
//     this.nome = nome
//     this.idade = idade
//     this.email = email
//     this.falar = function() {console.log("Oi meu nome é: " + this.nome)}
// }

// const pessoa1 = new pessoa("Henrique", 30, "henrique@email.com")
// console.log(pessoa1)
// pessoa1.falar()

//IN
// console.log("nome" in pessoa1)
// console.log("origem" in pessoa1)

// const objetoPessoa =
// {
//     nome:"Henrique",
//     idade: 26,
//     profissao: "Estudante"
// }

// //varre um objeto
// for(const propriedade in objetoPessoa)
// {
//     console.log(objetoPessoa[propriedade])
// }

//CLASSE
// class Carro{
//     constructor(modelo, ano, cor){
//         this.modelo = modelo
//         this.ano = ano
//         this.cor = cor
//     }

//     apresentar(){
//         var idade = 2024 - this.ano
//         console.log(`O ${this.modelo} é ${this.cor} e tem ${idade} anos`)
//     }
// }

// const meuCarro = new Carro("VW", 2017, "branco")
// meuCarro.apresentar()

// class Livro{
//     constructor(titulo, genero, editora, autor){
//         this.titulo = prompt("Digite o titulo")
//         this.genero = prompt("Digite o genero")
//         this.editora = prompt("Digite a editora")
//         this.autor = prompt("Digite o auto")
//     }
//     mostrar(){
//         alert(`Titulo: ${this.titulo}, Genero ${this.genero}, Editora ${this.editora}, Autor: ${this.autor}`)
//     }

// }
// const livro1 = new Livro()
// livro1.mostrar()

class produto {
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
        this.vendido = false;
    }
    somaICMS(){
        this.preco = this.preco * 1.21;
        console.log(`Produto ${this.nome} Valor = ${this.preco}`)
    }
    vender(){
        this.vendido = true;
        console.log(`Produto ${this.nome} vendido`)
    }
}

const produto1 = new produto("arroz", "125");
const produto2 = new produto("macarrão", "50");
produto1.somaICMS();
produto2.somaICMS();
produto1.vender();
produto2.vender();