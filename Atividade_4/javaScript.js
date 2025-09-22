/*
    - Crie um array com 5 nomes e exiba o terceiro nome no console.
    - Adicione um nome ao final e um no início do array.
    - Remova o último nome e exiba o array atualizado.
    - Use map() para criar um novo array dobrando os valores de [2, 4, 6, 8].
    - Use filter() para criar um novo array apenas com números maiores que 5 em [1, 3, 5, 7, 9]
*/

let nomes = ["João","Pedro","Tiago","Jonas","Abdias"]
let valores = [2,4,6,8]
let valoresDobrados = []
let numeros = [1, 3, 5, 7, 9]
let numerosNovo = []

// Exibição dos dados em formato de tabela na página
var container = document.getElementById("container");
container.innerHTML = [
    '<hr>',
    '<h2>Criando um array de nomes e exibindo o terceiro elemento:</h2>',
    '<hr>',
    '<h4> Array: ' + nomes.join() + '</h4>',
    '<h4> O terceiro elemento do array é : ' + nomes[2] + '</h4>',
    '<hr>',
    '<h3> Adicionando um elemento ao final array:</h3>',
    '<hr>',
    '<h4> Array atual: ' + nomes.join() + '</h4>',
    '<h4> Array com elemento adicionado: ' + adicionaElemento(nomes, "Matias") + '</h4>',
    '<hr>',
    '<h3> Removendo o último elemento do array e exibindo o array atualizado:</h3>',
    '<hr>',
    '<h4> Array atual: ' + nomes.join() + '</h4>',
    '<h4> Array com elemento adicionado: ' + removeUltimoElemento(nomes) + '</h4>',
    '<hr>',
    '<h3> Usando MAP para criar um novo array com os valores dobrados do array original:</h3>',
    '<hr>',
    '<h4> Array atual: ' + valores.join() + '</h4>',
    '<h4> Array com valores dobrados: ' + dobraValores(valores, valoresDobrados) + '</h4>',
    '<hr>',
    '<h3> Usando FILTER para criar um novo array com números acima de 5:</h3>',
    '<hr>',
    '<h4> Array atual: ' + numeros.join() + '</h4>',
    '<h4> Array com valores acima de 5: ' + filtraNumeros(numeros, numerosNovo) + '</h4>',
].join("\n");

// Resetando os valores dos arrays para exibição em console
nomes = ["João","Pedro","Tiago","Jonas","Abdias"]
valores = [2,4,6,8]
valoresDobrados = []
numeros = [1, 3, 5, 7, 9]
numerosNovo = []

// Exibindo Resultado na console
console.log("Criando um array de nomes e exibindo o terceiro elemento:");
console.log("---------------------------------------------------------");
console.log("Array: ", nomes.join());
console.log("O terceiro elemento do array é : " + nomes[2]);
console.log("---------------------------------------------------------");
console.log("Adicionando um elemento ao final array:");
console.log("---------------------------------------------------------");
console.log("Array atual: ", nomes.join());
console.log("Array com elemento adicionado: ", adicionaElemento(nomes, "Matias"));
console.log("---------------------------------------------------------");
console.log("Removendo o último elemento do array e exibindo o array atualizado:");
console.log("---------------------------------------------------------");
console.log("Array atual: ", nomes.join());
console.log("Array com elemento adicionado: ", removeUltimoElemento(nomes));
console.log("---------------------------------------------------------");
console.log("Usando MAP para criar um novo array com os valores dobrados do array original:");
console.log("---------------------------------------------------------");
console.log("Array atual: ", valores.join());
console.log("Array com valores dobrados: ", dobraValores(valores, valoresDobrados));
console.log("---------------------------------------------------------");
console.log("Usando FILTER para criar um novo array com números acima de 5:");
console.log("---------------------------------------------------------");
console.log("Array atual: ", numeros.join());
console.log("Array com valores acima de 5: ", filtraNumeros(numeros, numerosNovo));

// Adiciona elemento ao array
function adicionaElemento(nomes, nome) {
    nomes.push(nome);
    return nomes.join();
}

// Remove o último elemento do array
function removeUltimoElemento(nomes) {
    nomes.pop();
    return nomes.join();
}

// Cria um novo array dobarando o valor dos elementos
function dobraValores(valores, valoresDobrados) {
    valoresDobrados = valores.map(valor => valor * 2);
    return valoresDobrados.join();
}

// Cria um novo array com os elementos com valor maior que 5
function filtraNumeros(numeros, numerosNovo) {
    numerosNovo = numeros.filter(numero => numero > 5);
    return numerosNovo.join();
}
