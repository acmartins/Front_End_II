/*

Um funcionário de uma empresa recebe aumento salarial anualmente.
    - Sabe-se que:Esse funcionário foi contratado em 1995, com salário inicial de 
      R$ 1.000,00;
    - Em 1996 recebeu aumento de 0,15% sobre seu salário inicial;
    - A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao 
      dobro do percentual do ano anterior. 
      
Faça um programa que determine o salário atual desse funcionário.

Após concluir isto, faça uma segunda versão do seu código que permita o usuário
informar o salário inicial do funcionário. Utilize obrigatoriamente a função prompt() 
para coletar o salário inicial.

*/

// Dados iniciais das populações e taxas de crescimento
const salarioInicial = 1000.00;
let salarioAtual = salarioInicial;
let percAumento = 0.0015; // 0,15% aumento anual inicial
const anoInicial = 1995;
const anoAtual = new Date().getFullYear();

for (i=anoInicial; i<=anoAtual;i++) {
  
    if (i <= 1995) {
        salarioAtual = salarioAtual;
    } else {
        if (i >= 1997) {percAumento = percAumento * 2};
        salarioAtual+=(salarioAtual * percAumento);
    }

}

if (typeof(window) !== 'undefined') {
    // Exibe resultados html
    var container_4 = document.getElementById("container_4");
    container_4.innerHTML = [
        '<hr>',
        '<span>4)</span><br>',
        '<span>O salário atual do funcionário em ' + anoAtual + ' é de R$ ' + salarioAtual.toFixed(2) + '</span>'
    ].join("\n");
} else {
    // Exibe os resultados no console
    console.log("4)");
    console.log(`O salário atual do funcionário em ${anoAtual} é de R$ ${salarioAtual.toFixed(2)}`);
}  