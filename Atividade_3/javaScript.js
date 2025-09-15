/*
Crie uma função chamada calcularTotal que receba:
• O preço unitário de um produto.
• A quantidade comprada.

Calcule o valor total da compra.

Crie outra função chamada aplicarDesconto que receba o valor total e retorne o valor com
desconto, conforme a regra:
• Compras acima de R$ 100,00 → 10% de desconto
• Compras até R$ 100,00 → sem desconto

Adicione uma função exibirResumo() que formate e exiba um resumo final da compra.
• Valor total antes do desconto.
• Valor final com o desconto aplicado.

OBS: Use prompt() para ler os dados do usuário (preço e quantidade).

Orientações o desenvolvimento do TED:
• A resposta deve ser postada no github do aluno e disponibilizado o endereço do github no
classroom, na Atividade 4.
*/

// Mascaramento de valores (1.000,00) - Funções por Declaração
function formataDecimal(numero) {
      return numero.toLocaleString('pt-BR', {
                                    style: 'decimal',
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                    });
}

// Função para calcular o valor total (Arrow Function) 
const calcularTotal = (precoUnitario, quantidade) => (precoUnitario * quantidade);

// Funcão para calculo do desconto (Como expressão)
const aplicarDesconto = function(custo) {
    if (custo <= 100.00) {
        return 0.00;
    } else {
        return custo * 0.10;
    }
}

// Função para exibir o resumo da compra (Como declaração)
function exibirResultado(preco, quantidade, custo) {
    
    let valorDesconto = aplicarDesconto(custo);

    // Exibição dos dados em formato de tabela na página
    var container = document.getElementById("container");
    container.innerHTML = [
    '<table>',
    '<thead>',
    '<tr>',
    '<th>Item</th>',
    '<th>Descrição</th>',
    '<th>Valor</th>',
    '</tr>',
    '</thead>',
    '<tbody>',

    '<tr>',
    '<td>1</td>',
    '<td>Valor Unitário do Produto</td>',
    '<td align="right">' + formataDecimal(parseFloat(preco)) + '</td>',
    '</tr>',

    '<tr>',
    '<td>2</td>',
    '<td>Quantidade</td>',
    '<td align="right">' + quantidade + '</td>',
    '</tr>',

    '<tr>',
    '<td class="resultado">3</td>',
    '<td class="resultado">Valor Total</td>',
    '<td class="resultado" align="right">' + formataDecimal(custo) + '</td>',
    '</tr>',

    '<tr>',
    '<td>4</td>',
    '<td>Valor do Desconto</td>',
    '<td align="right">' + formataDecimal(valorDesconto) + '</td>',
    '</tr>',

    '<tr>',
    '<td class="resultado">5</td>',
    '<td class="resultado">TOTAL A PAGAR</td>',
    '<td class="resultado" align="right">' + formataDecimal(custo - valorDesconto) + '</td>',
    '</tr>',

    '</tbody>',
    '</table>'
    ].join("\n");

    // Exibição dos dados na console
    console.log("-------------------------------------")
    console.log("   R E S U M O   D A   C O M P R A   ")
    console.log("-------------------------------------")
    console.log("Valor unitário do produto: " + formataDecimal(parseFloat(preco)));
    console.log("Quantidade: " + quantidade);
    console.log("-------------------------------------")
    console.log("VALOR TOTAL: " + formataDecimal(custo));
    console.log("-------------------------------------")
    console.log("Valor do Desconto: " + formataDecimal(valorDesconto));
    console.log("-------------------------------------")
    console.log("VALOR A PAGAR: " + formataDecimal(custo - valorDesconto));
    console.log("-------------------------------------")

}
 
// Declaração e atribuição de valores
let preco = parseFloat(prompt("Qual o preço do produto/serviço?"));
let quantidade = parseInt(prompt("Qual a quantidade de itens?"));
let custo = calcularTotal(preco, quantidade);

// Exibição dos resultados
exibirResultado(preco, quantidade, custo);
