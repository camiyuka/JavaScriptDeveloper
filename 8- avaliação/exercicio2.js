
// 2) Faça um programa que receba N quantidade de números e seus respectivos valores.
// Imprima o maior número par e o menor número impar.

//     Exemplo:
//         Entrada:
//             5
//             3
//             4
//             1
//             10
//             8

//         Saída:
//             Maior número par: 10
//             Menor número impar: 1

const { gets, print} = require ('./funcoes-aux2');

const n= gets();
let maiorNumeroPar= null;
let menorNumeroImpar= null;

for (let i = 0; i < n; i++) {
    let numero = gets();
    if(numero % 2 === null || numero > maiorNumeroPar){
        maiorNumeroPar= numero;
    } else{ 
        if(menorNumeroImpar === null || numero < menorNumeroImpar ){
            menorNumeroImpar= numero;
        }else{
            
        }
            }
                            }

print('o menor número ímpar é: ' + menorNumeroImpar);
print('o maior número par é: ' + maiorNumeroPar);
