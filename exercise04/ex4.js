/*
A ModalGR possui um sistema em desenvolvimento que recebe um vetor de 50
números inteiros gerados de forma randômica. A partir desses valores armazenar
em vetores distintos. Visando atender esse quesito, você foi escolhido para nos
ajudar nessa solução!

Após a finalização exibir em tela os valores de cada um dos vetores.
* Primeiro vetor: os números que são múltiplos de 3;
* Segundo vetor: os números que não são múltiplos de 3.
*/

// Função criada para gerar numeros aleatórios
function generateRandomNumber(){
    return Math.floor(Math.random() * 100);
}

// Gerando 50 números aleatórios e atribuindo a constante randomNumbers através da função generateRandomNumber
const randomNumbers = Array.from({length: 50}, generateRandomNumber);

console.log("Números gerados: \n", randomNumbers.join(", "));

// Filtrando os números que são múltiplos de 3 e os que não são múltiplos de 3
const multiplesOfThree = randomNumbers.filter(number => number %3 == 0);
const notMultiplesOfThree = randomNumbers.filter(number => number %3 != 0);

// Exibindo os valores de cada vetor
console.log("Multiplos de 3: \n", multiplesOfThree.join(", "));
console.log("Não múltiplos de 3: \n", notMultiplesOfThree.join(", "));