/*
ATENÇÃO!!!
ANTES DE RODAR ESTE SCRIPT INSTALAR O MODULO: readline-sync
npm install readline-sync 

Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento de 3%
e que a população de B seja 200000 habitantes com uma taxa anual de crescimento de 1.5%. 
Faça um programa que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou
iguale a população do país B, mantidas as taxas de crescimento.
*/

// Dados iniciais das populações e taxas de crescimento
let populacaoA = 80000;
const taxaCrescimentoA = 0.03; // 3%

let populacaoB = 200000;
const taxaCrescimentoB = 0.015; // 1.5%

let anos = 0;

// Calculando o crescimento anual até que a população do país A ultrapasse ou iguale a do país B
while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

if (typeof(window) !== 'undefined') {
    // Exibe resultados html
    var container_1 = document.getElementById("container_1");
    container_1.innerHTML = [
        '<hr>',
        '<span>Respostas:</span>',
        '<hr>',
        '<span>1)</span><br>',
        '<span>Serão necessários ' + anos + ' anos para que a população do país A ultrapasse ou iguale a população do país B.</span><br>',
        '<hr>',
        '<span>População final de A: ' + Math.floor(populacaoA) + '</span><br>',
        '<span>População final de B: ' + Math.floor(populacaoB) + '</span><br>'
    ].join("\n");
} else {
    // Exibe os resultados no console
    console.log("1)");
    console.log("Serão necessários ", anos, " anos para que a população do país A ultrapasse ou iguale a população do país B.");
    // usando a função floor da biblioteca Math para retornar apenas a parte inteira dos valores calculados
    console.log("População final de A: ", Math.floor(populacaoA)); 
    console.log("População final de B: ", Math.floor(populacaoB));
}    