/* 08 - Crie um programa em Javascript que conte de 0 até 50 e imprima no console se cada número é par ou ímpar. Utilize um laço de repetição for para percorrer cada número de 0 a 50 e utilize uma estrutura condicional if...else para verificar se o número é par ou ímpar. Caso o número seja par, o programa deve imprimir a mensagem "O número X é par", onde X é o número em questão. Caso o número seja ímpar, o programa deve imprimir a mensagem "O número X é ímpar". */

for (x = 0; x <= 50; x++) {
    if (x % 2 === 0) {
        console.log(`Este número ${x} é par`);
    } else if (x % 2 !== 0) {
        console.log(`Este número ${x} é ímpar.`)
    }
}