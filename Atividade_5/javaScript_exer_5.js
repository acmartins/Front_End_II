/*
Escreva uma função que encontre a área e o perímetro de um círculo, de acordo com o raio fornecido. 
Utilize obrigatoriamente a função prompt() para coletar o tamanho do raio.
Área (A): A = πr² (Pi multiplicado pelo raio ao quadrado).
Perímetro/Circunferência (C): C = 2πr (Dois vezes Pi multiplicado pelo raio).
*/

// Mascaramento de valores (1.000,00) - Funções por Declaração
function formataDecimal(numero) {
      return numero.toLocaleString('pt-BR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    });
}

// Dados iniciais das populações e taxas de crescimento
let valorPI = 3.14; // Valor de PI

if (typeof(window) !== 'undefined') { // modo browser
    raioRecebido = prompt("Exercício 5:\nDigite o comprimento do raio: ");
} else { //  modo console
    var readline = require('readline-sync');
    raioRecebido = readline.question("Digite o comprimento do raio: ");
}    

let raio = parseFloat(raioRecebido);
let AreaCirculo = valorPI * (raio ** 2);
let Circunferencia = 2 * valorPI * raio;

if (typeof(window) !== 'undefined') {
    // Exibe resultados html
    var container_5 = document.getElementById("container_5");
    container_5.innerHTML = [
        '<hr>',
        '<span>5)</span><br>',
        '<span>O raio informado foi: ' + raio + '</span><br>',
        '<span>Para o raio fornecido a área do circulo é: ' + formataDecimal(AreaCirculo) + '</span><br>',
        '<span>Para o raio fornecido o perimetro do circulo é: ' + formataDecimal(Circunferencia) + '</span>'
    ].join("\n");
} else {
    // Exibe os resultados no console
    console.log("5)");
    console.log("O raio informado foi: " + raio);
    console.log("Para o raio fornecido a área do circulo é: " + formataDecimal(AreaCirculo));
    console.log("Para o raio fornecido o perimetro do circulo é: " + formataDecimal(Circunferencia));
}  