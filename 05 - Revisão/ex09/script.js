/* 09 - Crie um programa em Javascript que verifique se um número é primo ou não. O número a ser verificado deve ser armazenado em uma variável chamada num. O programa deve contar quantas divisões exatas o número tem utilizando um laço de repetição for que percorre todos os números de 1 até o próprio número. Caso o número seja divisível por um desses números, aumenta-se o valor da variável divisoes. Ao final do laço, utiliza-se uma estrutura condicional if...else para verificar se o número é primo ou não. Se o número tiver exatamente duas divisões exatas (1 e ele mesmo), o programa deve imprimir a mensagem "O número X é primo", onde X é o número em questão. Caso contrário, o programa deve imprimir a mensagem "O número X não é primo". */

let num = Number(prompt("Digite um número para verificar se ele é primo:"));

for (let i = 1; i <= num; i++) {
    if (num % i == 0 && num % num == 0) {
        console.log(i);
    } else {
        
    }
}