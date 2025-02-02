/*

A ModalGR possui um sistema em desenvolvimento que recebe uma frase e, a partir
disso, exibe a quantidade de palavras contidas nela.
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução! 
Após a finalização exibir em tela a mensagem no padrão exigido.

Observação:

• Entrada: "A ModalGR está criando soluções incríveis."
• Saída: Quantidade de palavras: 6
• Considere como separadores de palavras apenas os espaços em branco.
*/

//Com a constante readline, podemos ler dados de uma stream de dados.
const readline = require("readline");

//criando uma interface pra fazer leitura e escrita de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countWords(phrase){

    // trim() remove os espaços em branco no início e no final de uma string
    // split() divide uma string em um array de substrings
    // \s+ é uma expressão que corresponde a um ou mais espaços em branco
    const words = phrase.trim().split(/\s+/);
    // Se a primeira palavra for vazia, retorna 0, senão retorna o tamanho do array
    return words[0] === "" ? "Quantidade de palavras: 0" : `Quantidade de palavras: ${words.length}`;
}

rl.question("Digite uma frase: ", phrase =>{
    console.log(countWords(phrase));
    rl.close();
});