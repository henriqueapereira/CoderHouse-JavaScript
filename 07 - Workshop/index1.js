//Variaveis e tipos

var numero = 0;
let numero1 = 1;
const numero3 = 3;

if(true) {
    let numero2 = 0;
    numero3 = 4;
}

console.log(numero3);
consolelog(numero2);

let nome = prompt("Digite um nome");
alert(nome)
console.log(nome)
/* ----------------------------------- */
let idade = 20;
if(idade >= 18 && idade <= 60) {
    console.log("Você é um adulto");
} else if (idade > 60) {
    console.log("Você é um idoso");
} else {
    console.log("Você é menor de idade")
}
/* ----------------------------------- */
function somarDoisValores(parametro1, parametro2) {
    return parametro1 + parametro2
}
console.log(somarDoisValores)


for (let i = 0; i< 5; i++)
{
    console.log("For", i);
}

let j = 0;
while (true)
{
    console.log("While loop", j);
    j++;
}

do {
    console.log("Do while", k)
    k++;
} while (k < 5)

