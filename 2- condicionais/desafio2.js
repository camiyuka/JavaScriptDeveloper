/*
Faça um programa para calcular o valor de uma viagem 

Você terá 5 variáveis, sendo elas:

1- preço do etanol
2- preço da gasolina 
3- o tipo de combustível que está no seu carro 
4- gasto médio de combustível do carro por km
5- distância em km da viagem 

imprima no console o valor que será gasto para realizar essa viagem
*/

//diferente carro do desafio 1 
const precoGasolina= 6.50;
const precoEtanol=5.50;
const KmPorLitro= 18.3;
const distanciaEmKm=200;
const tipoCombustivel= 'etanol';

const litrosConsumidos= distanciaEmKm/ KmPorLitro;

if(tipoCombustivel==='etanol'){
    const valorGasto= litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else{
    const valorGasto= litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}
