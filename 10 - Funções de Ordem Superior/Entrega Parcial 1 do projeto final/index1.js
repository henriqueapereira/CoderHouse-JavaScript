let carros = []; // Array para armazenar objetos de carros
let usuarios = [];// Array para armazenar objetos de usuarios

function adicionarCarro() {
    let marca = prompt("Digite a marca do carro:");
    let modelo = prompt("Digite o modelo do carro:");
    let valor = prompt("Digite o valor do carro:");
    let ano = prompt("Digite o ano do carro:");

    // Criar um objeto carro
    let carro = {
        marca: marca,
        modelo: modelo,
        valor: valor,
        ano: ano
    };

    // Adicionar o objeto ao array
    carros.push(carro);

    alert("Carro adicionado com sucesso!");
}

function mostrarCarros() {
    alert("Lista de carros:");

    //Percorrer o array e mostrar as informações de cada usuario
    carros.forEach((carro, index) => {
        alert(`Carro ${index + 1}:\nMarca: ${carro.marca}\nModelo: ${carro.modelo}\nValor: ${carro.valor}\nAno: ${carro.ano}\n--------------`);
    });
}

function adicionarUsuario(){
    let nome = prompt("Digite o nome:");
    let email = prompt("Digite o email")
    let celular = prompt("Digite o celular")

    //Criar um objeto usuario
    let usuario = {
        nome: nome,
        email: email,
        celular: celular
    }

    //Adicionar o objeto ao array
    usuarios.push(usuario)

    alert("Usuario adicionado com sucesso")
}

function mostrarUsuarios(){
    alert("Lista de usuarios");

    //Percorrer o array e mostrar as informações de cada usuario
    usuarios.forEach((usuario, index) => {
        alert(`Usuario ${index + 1}:\nNome: ${usuario.nome}\nEmail: ${usuario.email}\nCelular: ${usuario.celular}\n------------`)
    });
}

// Loop para exibir o menu até que o usuário escolha sair
while (true) {
    let opcao = prompt("Escolha uma opção:\n1. Adicionar carro\n2. Mostrar carros\n3. Cadastrar usuario\n4. Mostrar usuarios\n5. Sair");

    switch (opcao) {
        case "1":
            adicionarCarro();
            break;
        case "2":
            mostrarCarros();
            break;
        case "3":
            adicionarUsuario();
            break;
        case "4":
            mostrarUsuarios();
            break;
        case "5":
            console.log("Saindo do programa. Até logo!");
            process.exit(); // Encerrar o programa
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}
