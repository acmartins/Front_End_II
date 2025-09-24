/*
Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
números pares e a quantidade de números ímpares. Utilize obrigatoriamente a função 
prompt() para coletar os números.
*/

// Dados iniciais das populações e taxas de crescimento
let numero;
let entrada; 
let qtdNumerosPares = 0;
let qtdNumerosImpares = 0;

if (typeof(window) !== 'undefined') { // modo browser

    for (let i = 1; i < 11; i++){

        entrada = prompt("Digite um número inteiro (" + i + "/10)): ");

        if (entrada === null) {
            alert("Operação cancelada.");
            break; 
        }

        numero = parseInt(entrada);

        // Verifica se a entrada não é um número e pede para repetir
        if (isNaN(numero)) {
            alert("Por favor, digite um número válido.");
            i--; // Decrementa o contador para que o usuário tente novamente para a mesma posição
            continue; // Pula para a próxima iteração
        }

        if (numero % 2 === 0) {
            qtdNumerosPares++;
        } else {
            qtdNumerosImpares++;
        }
    }    

} else { // modo console

    var readline = require('readline-sync');

    for (let i = 1; i < 11; i++){

        entrada = readline.question("Digite um numero inteiro (" + i + "/10)): ");

        numero = parseInt(entrada);
            
        if (isNaN(numero)) {
            console.log("Por favor, digite um numero válido.");
            i--;
            continue;
        }

        if (numero % 2 === 0) {
            qtdNumerosPares++;
        } else {
            qtdNumerosImpares++;
        }
    }    
}

if (typeof(window) !== 'undefined') {
    // Exibe resultados html
    var container_2 = document.getElementById("container_2");
    container_2.innerHTML = [
        '<hr>',
        '<span>2)</span><br>',
        '<span>A quantidade de números pares digitados é igual a: ' + qtdNumerosPares + '</span><br>',
        '<span>A quantidade de números impares digitados é igual a: ' + qtdNumerosImpares + '</span><br>'
    ].join("\n");
} else {
    // Exibe os resultados no console
    console.log("2)");
    console.log("A quantidade de números pares digitados é igual a: ", qtdNumerosPares); 
    console.log("A quantidade de números impares digitados é igual a: ", qtdNumerosImpares);
}