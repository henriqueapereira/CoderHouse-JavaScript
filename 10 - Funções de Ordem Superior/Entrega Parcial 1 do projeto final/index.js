class Carro {
    constructor(modelo, marca, preco, anoDoModelo) {
        this.modelo = modelo.toUpperCase()
        this.marca = marca.toUpperCase()
        this.preco = parseFloat(preco)
        this.anoDoModelo = parseFloat(anoDoModelo)
    }

    vender() {
        this.vendido = true
    }
}


class Usuario {
    constructor(nome, telefone, cpf, email) {
        this.nome = nome.toUpperCase()
        this.telefone = parseInt(telefone)
        this.cpf = parseInt(cpf)
        this.email = email
    }
}

const listaDeCarros = []


let inicio = parseInt(prompt("Bem vindo(a), digite 1 para adicionar um veículo ou 2 para ver a lista de veículos cadastrados:"))

switch (inicio) {
    case 1:
        listaDeCarros.push(new Carro(
            prompt("Digite o nome da modelo:"),
            prompt("Digite o nome da marca:"),
            prompt("Digite o preço do carro:"),
            prompt("Digite o ano do modelo:"),
        ))
        break;
    
    case 2:
        console.log(listaDeCarros)
}

// if (inicio == 1) {
//     listaDeCarros.push(new Carro(
//         prompt("Digite o nome da modelo:"),
//         prompt("Digite o nome da marca:"),
//         prompt("Digite o preço do carro:"),
//         prompt("Digite o ano do modelo:"),
//     ))
    
    

// } else if (inicio == 2) {
//     console.log(listaDeCarros)
// }






