//array = list

// const array = [];
// const array2 = [1,2,3,4];
// const array3 = ["Joao", "Caio", "Flavio"];

// //array de objetos
// const array6 = [
//     {
//         nome: "Jorge",
//         idade: 26
//     },
//     {
//         nome: "Joao",
//         idade: 26
//     }
// ]


// const numeros = [1, 2, 3, 4, 5, 6];
// const pessoas = ["Joao", "Caio", "Flavio", "Fabio"];
// console.log(numeros[0]);
// console.log(numeros[5]);
// console.log(numeros[3] + numeros[4]);

// //percorrendo um array
// for (let i = 0; i<pessoas.length; i++)
// {
//     console.log(pessoas[i])
// }

// const pessoas2 = ["Joao", "Caio", "Flavio", "Fabio"];
// //adicionando 
// pessoas2.push("Cris"); //insere no final
// console.log(array);
// array.unshift("Melissa"); //insere no inicio
// console.log(pessoas2);
// pessoas2.pop(); //elimina o ultimo
// pessoas2.shift(); //elimina o primeiro
// console.log(pessoas2);

// const nomes = ["Rita", "Marcia", "Mara", "Luis","Léo","Ana"];
// nomes.splice(2, 4) //elimina as posições 2 e 4
// console.log(nomes);
// console.log(nomes.join(";")) //separa por ;

// const caes = ["Pandora", "Bataman"];
// const gatos = ["Mishi", "Garfield", "Zuri"];
// const animais = caes.concat(gatos)
// console.log(animais);

// const nomes = ["Rita", "Marcia", "Mara", "Luiz", "Ana", "Leo", "Joao"]
// console.log(nomes)
// console.log(nomes[0])
// const nomesSlice = nomes.slice(1, 4) //traz os arrays do 1 até o 3
// console.log(nomesSlice)

// console.log(nomes.includes["Rita"]) //para saber se tem um valor especifico no array
// console.log(nomes.includes["Anna"])

// console.log(nomes.indexOf("Luiz")) //para saber o indice de um valor especifico

// console.log(nomes.reverse())

// let numeroMes;

// do {
//   numeroMes = parseInt(prompt("Digite um número de 1 a 12 (ou 0 para sair):"));

//   if (numeroMes >= 1 && numeroMes <= 12) {
//     console.log(numeroMes)
//     const meses = ["Janeiro",
//       "Fevereiro",
//       "Março",
//       "Abril",
//       "Maio",
//       "Junho",
//       "Julho",
//       "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
//     console.log(`O mês correspondente é ${meses[numeroMes - 1]}`)
//   } else {
//     console.log("Valor invalido, digite um valor valido")
//   }

// } while (numeroMes !== 0);

// const listaNomes = [];
// let quantidade = 5

// do {
//   let entrada = prompt("Inserir um nome");
//   listaNomes.push(entrada.toUpperCase())
//   console.log(listaNomes.length)
// } while (listaNomes.length != quantidade)

// console.log(listaNomes)
// const novaLista = listaNomes.concat(["CESAR", "PRISCILA"])
// console.log(novaLista)
// console.log(novaLista.join("\n"))

// const nomes = ["Rita", "Marcia", "Mara", "Luiz", "Ana", "Leo", "Joao"]
// console.log(nomes)

// const excluir = (nome) => {
//   let index = nomes.indexOf(nome)

//   if (index !== -1) {
//     nomes.splice(index, 1)
//     console.log(nomes)
//   } else {
//     console.log(`O nome ${nome} não foi encontrado`)
//   }
// }

// let nomeExcluir = prompt("Qual nome deseja excluir?")
// excluir(nomeExcluir)

// let cores = []

// for (let i = 0; i < 5; i++) {
//   let cor = prompt("Digite uma cor: ")
//   cores.push(cor)
// }

// console.log("Array completo: ", cores)
// console.log("Tamanho do array: ", cores.length)

// let corRemover = prompt("Digite a cor a ser removida: ")
// let indiceRemover = cores.indexOf(corRemover)

// if (indiceRemover !== -1) {
//   cores.splice(indiceRemover, 1)
//   console.log("Cor removida. Array Atualizado", cores)
// } else {
//   console.log("A cor informada nao existe no array")
// }

// for (let i = 0; i < cores.length; i++) {
//   console.log(`Na posição ${i} temos a cor ${cores[i]}`)
// }

// let novaCor = prompt("Digite uma nova cor")
// if (cores.includes(novaCor)) {
//   console.log("A cor ja exsite no array")
// } else {
//   cores.unshift(novaCor)
//   console.log("A nova cor foi inseridade no array", cores)
// }

////////////////////////////////////////////////////
//ARRAY DE OBJETOS

// const objeto1 = { id: 1, nome: "Arroz" };

// const array = [objeto1, { id: 2, nome: "Macarrão" }];

// array.push({ id: 3, nome: "Pão" });

// console.log(array);
// //PERCORRENDO UM ARRAY
// for (const produto of array) {
//   console.log(produto.id, produto.nome);
// }


// class Produto {
//     constructor(nome, preco) {
//       this.nome = nome.toUpperCase()
//       this.preco = parseFloat(preco)
//       this.vendido = false
//     }
  
//     somarICMS() {
//       this.preco = this.preco * 1.21
//     }
//   }
  
//   const produtos = [];
//   produtos.push(new Produto("arroz", "125"))
//   produtos.push(new Produto("carne", "70"))
//   produtos.push(new Produto("feijão", "50"))
  
//   for (const produto of produtos) {
//     produto.somarICMS()
//   }
  
//   console.log(produtos)

/*
ATIVIDADE EXTRA
DESENVOLVENDO UM SITEMA
    - RECEBA NOMES PELO PROMPT E INSIRA TODOS EM UM ARRAY ATÉ QUE O USUARIO DIGITE FIM
    - AO FINALIZAR, PERCORRA O ARRAY USANDO O "FOR" E EXIBA TODOS OS NOMES NO CONSOLE
    - NÃO INSIRA A PALAVRA "FIM" NO ARRAY
*/
let arrayDeNomes = []

while(true) {
    let recebeNome = prompt("Digite um nome(ou fim para encerrar)") 

    if(recebeNome.toLowerCase()==="fim"){
        break
    }
    
    arrayDeNomes.push(recebeNome)
}

console.log(arrayDeNomes.join("\n"))

