/*
Na reunião de análise do sistema acadêmico, o usuário lhe forneceu informações acerca das condições de aprovação ou reprovação do corpo discente (alunos).

A primeira condição para aprovação de um aluno é a sua frequência nas aulas ser igual ou superior a 75%, ou seja, o aluno só pode faltar a 25% das aulas no semestre. Lembre-se que para calcular a freqüência você necessita obter o número de aulas no semestre, pois a freqüência do aluno se dá pelo cálculo: (faltas dos alunos / número de aulas no período) * 100.

A segunda condição para aprovação ou reprovação de um aluno em uma disciplina está condicionada à média obtida por meio das duas provas (avaliação) oficiais que ocorrem no decorrer do semestre, conhecidas como P1 e P2. Para calcular a média, o sistema deve obter e somar as notas das duas provas (P1 e P2) e dividi-las por dois.
Exemplo: (P1+P2)/2.

Se o resultado dessa operação for maior ou igual a sete (7,0), o aluno será considerado aprovado; já se o aluno obtiver uma média entre cinco (5,0) e menor que sete (7,0), ele deverá fazer uma prova complementar (recuperação); logo, se a média estiver abaixo de cinco (5,0), o aluno será reprovado.

Caso o aluno esteja na recuperação, o programa deve solicitar a nota do aluno na recuperação, somar com a média aritmética calculada anteriormente, e dividir por 2. Se o aluno obter nota 5 ou superior ele está aprovado, caso contrário, reprovado.

De posse dessas informações, desenvolva um programa que defina a situação do aluno. Para isso, o programa, ao ser executado, deve solicitar o número de aulas do semestre, a quantidade de falta do aluno, a primeira e a segunda nota. Lembrando que, se o aluno tiver a necessidade de realizar uma prova complementar (a recuperação), essa nota também deve ser solicitada. Ao final, o programa deve informar a situação do aluno.

Como resultado, o programa deverá expor:

Número de aulas do semestre:
Número de faltas do aluno:
Percentual de presença do aluno:

A primeira nota:
Segunda nota:
Nota complementar (recuperação):
Situação final do aluno:
*/

var nomeAluno = prompt("Qual o nome do aluno?");
var numeroAulasSemestre = prompt("Qual o número de aulas no semestre?");
var numeroFaltasAluno = prompt("Qual o número de faltas do aluno?");

var percentualFaltas = (numeroFaltasAluno / numeroAulasSemestre) * 100;

if (percentualFaltas > 25) {
    console.log("O aluno " + nomeAluno + " teve " + percentualFaltas + "% de faltas, estando então reprovado");
}

var notaP1 = prompt("Qual a nota obtida na 1ª prova?");
var notaP2 = prompt("Qual a nota obtida na 2ª prova?");
var situacao = "APROVADO";

var media = ((parseFloat(notaP1) + parseFloat(notaP2)) / 2);

if (media < 5) {
    console.log("O aluno obteve a média: " + media + " inferior ao necessário para ir para prova de recuperação. ALUNO REPROVADO!");
    situacao = "REPROVADO";
} else {

    if (media >= 7) {
        console.log("O aluno obteve média: " + media + " aluno APROVADO!");
    } else {
        var notaRecuperacao = prompt("Qual a nota que o aluno obteve na prova de recuperação?");

        var mediaRecuperacao = (media + parseFloat(notaRecuperacao)) / 2;

        if (mediaRecuperacao >= 5) {
            console.log("O aluno obteve média: " + mediaRecuperacao + " aluno APROVADO!");
        } else {
            console.log("O aluno obteve média: " + mediaRecuperacao + " aluno REPROVADO!");
            situacao = "REPROVADO"
        }
    }

    console.clear();
    console.log("Nome do Aluno: " + nomeAluno);
    console.log("----------------------------------");
    console.log("Número de aulas do semestre: " + numeroAulasSemestre);
    console.log("Número de faltas do aluno: " + numeroFaltasAluno);
    console.log("Percentual de presença do aluno: " + (100 - percentualFaltas));
    console.log("----------------------------------");

    console.log("A primeira nota: " + notaP1);
    console.log("Segunda nota: " + notaP2);
    console.log("Média Bimestral: " + media);

    if (notaRecuperacao) {
        console.log("Nota complementar (recuperação): " + notaRecuperacao);
    }    
    
    if (notaRecuperacao) {
        console.log("Situação final do aluno: " + situacao + " com média: " + mediaRecuperacao);
    } else {
        console.log("Situação final do aluno: " + situacao + " com média: " + media);
    }
}