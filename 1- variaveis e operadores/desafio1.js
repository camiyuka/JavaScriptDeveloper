
/*
Faça um programa para calcular o valor gasto de combustível para uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - Gasto médio de combustível do carro por Km; 
3 - Distância em Km da viagem;

Imprima no console o valor que será gasto para realizar esta viagem
*/

const precoCombustivel= 5.79;
const kmPorLitro=12; 
const distanciaEmKm=1580;

const litrosConsumidos= distanciaEmKm/kmPorLitro;
const valorGasto= litrosConsumidos*precoCombustivel;
console.log(valorGasto.toFixed(2));