/* 
A ModalGR possui um sistema em desenvolvimento para uma biblioteca e numa parte
específica será necessário calcular o valor da multa de um livro atrasado, 
retornando uma mensagem no seguinte formato:

“O valor da multa para x dias de atraso é: R$x,yzˮ
Visando atender esse quesito, você foi escolhido para nos ajudar nessa solução!

A ideia é ter 2 campos: um para inserção do valor da multa por dia
e outro para os dias de atraso. Em seguida, exibir a mensagem no padrão exigido.
Observações:

* O valor da multa deve conter duas casas decimais após a vírgula;
* Considere que o valor mínimo da multa é R$1,00, independentemente do
cálculo.
*/

// Solução:

//Com a constante readline, podemos ler dados de uma stream de dados.
const readline = require("readline");

//criando uma interface pra fazer leitura e escrita de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateFine(finePerDay, daysLate){

    if(daysLate <= 0.0){
        return `Não há multa para ${daysLate} dias de atraso`;
    }

    let fine = finePerDay * daysLate;

    //Garantindo que o valor mínimo seja 1, caso a multa não chegue à 1 real.
    fine = Math.max(fine, 1); 

    //O método toFixed() formata um número de acordo com o parâmentro entre o ().
    return `O valor para ${daysLate} dias de atraso é: R$${fine.toFixed(2)}`;
}

rl.question("Digite o valor da multa por dia: ", finePerDay =>{
    //converte o valor para float
    finePerDay = parseFloat(finePerDay);

    rl.question("Digite a quantidade de dias de atraso: ", daysLate =>{
        //converte o valor para int
        daysLate = parseInt(daysLate);

        console.log(calculateFine(finePerDay, daysLate));
        rl.close();
    });
});