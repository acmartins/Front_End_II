/*
Faça um programa que, dado um conjunto de N números, determine o menor valor, 
o maior valor e a soma dos valores.
*/

// Dados iniciais das populações e taxas de crescimento
const numeros = [2,5,7,9,10,50,100,600];

// Igualando o maior e o menor número ao indice 0(zero) do conjunto de números 
let menor = numeros[0];
let maior = numeros[0];

// Criando variável para armazenar a soma
let soma = 0;

// verificando quem é o menor e o maior número do conjunto
// e somando os valores do conjunto

for (i=0; i<=(numeros.length)-1;i++) {

    if (maior < numeros[i]) {
        maior = numeros[i]
    } 
    
    if (menor > numeros[i]) {
        menor = numeros[i]
    } 

    soma+=numeros[i]

}

if (typeof(window) !== 'undefined') {
    // Exibe resultados html
    var container_3 = document.getElementById("container_3");
    container_3.innerHTML = [
        '<hr>',
        '<span>3)</span><br>',
        '<span>Conjunto de dados utilizado: [' + numeros.join() + ']</span><br>',
        '<span>Maior número do conjunto: ' + maior + '</span><br>',
        '<span>Menor número do conjunto: ' + menor + '</span><br>',
        '<span>Soma dos valores de todos os elementos do conjunto: ' + soma + '</span><br>'
    ].join("\n");
} else {
    // Exibe os resultados no console
    console.log("3)");
    console.log("Conjunto de dados utilizado: [" + numeros.join() + ']');
    console.log("Maior número do conjunto: " + maior);
    console.log("Menor número do conjunto: " + menor);
    console.log("Soma dos valores de todos os elementos do conjunto: " + soma)
}    