/*
Escreva uma função que informe o retorno de um investimento (montante) com base 
nos valores do capital inicial, tempo em meses e taxa de juros mensal, fornecidos 
pelo usuário. Utilize obrigatoriamente a função prompt() para coletar os valores 
necessários.
            
  Use a fórmula: M = C * (1+i)t Onde:
    C = Capital inicial investido
    i = Taxa de juros, em percentual
    t = Tempo do investimento, em meses
  Exiba o resultado com duas casas decimais.
*/

// Mascaramento de valores (1.000,00) - Funções por Declaração
function formataDecimal(numero) {
      return numero.toLocaleString('pt-BR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    });
}

if (typeof(window) !== 'undefined') { // modo browser
    capitalInicial = prompt("Digite o valor do capital inicial: ");
    taxaJuros = prompt("Digite o valor da taxa de juros: ");
    qtdMeses = prompt("Digite a quantidade de meses do investimento: ");
} else { //  modo console
    var readline = require('readline-sync');
    capitalInicial = readline.question("Digite o valor do capital inicial: ");
    taxaJuros = readline.question("Digite o valor da taxa de juros: ");
    qtdMeses = readline.question("Digite a quantidade de meses do investimento: ");
}    

C = parseFloat(capitalInicial);
i = parseFloat(taxaJuros);
t = parseInt(qtdMeses);

let montante = C * (1 + (i/100)) ** t;

if (typeof(window) !== 'undefined') {
    // Exibe resultados html
    var container_5 = document.getElementById("container_5");
    container_5.innerHTML = [
        '<hr>',
        '<span>6)</span><br>',
        '<span>O realizando um investimento com os dados abaixo:</span><br>',
        '<span>Capital Incial: ' + formataDecimal(C) + '</span><br>',
        '<span>Taxa de juros de : ' + formataDecimal(i) + '</span>',
        '<span>Tempo de investimento de: ' + t + ' meses</span>',
        '<span>Vai ter um novo capital de: ' + formataDecimal(montante) + '</span>',
        '<span>Gerando um redimento de: ' + formataDecimal(montante - C) + '</span>',
    ].join("\n");
} else {
    // Exibe os resultados no console
    console.log("6)");
    console.log("O realizando um investimento com os dados abaixo:");
    console.log("Capital Incial: " + formataDecimal(C));
    console.log("Taxa de juros de : " + formataDecimal(i));
    console.log("Tempo de investimento de: " + t + " meses");
    console.log("Vai ter um novo capital de: " + formataDecimal(montante));
    console.log("Gerando um redimento de: " + formataDecimal(montante - C));
}  