
// é uma função que não tem retorno 
function sayMyName (name){
    console.log('Your name is '+ name )
}

sayMyName('Camila');
sayMyName('Diogo'); 

// função que tem retorno 
function quadrado(valor){
   return valor * valor;
}

console.log(quadrado(10)+quadrado(10))

const quadradoDeDez = quadrado(10); 
console.log(quadradoDeDez);

//função que calcula juros 
function calcularJuros(valor, percentualJuros){
   const valorDeAcrescimo = (percentualJuros/100) * valor;
   return valor + valorDeAcrescimo;
}

console.log(calcularJuros(100,10));
console.log(calcularJuros(100,20));
console.log(calcularJuros(100,25));

//função main 

function main(){
    console.log('executando a função main, que é a principal a ser utilizada no código');
    console.log('chama-se todas as funções utilizadas no código aqui, para ficar mais limpo');
    sayMyName('Cami');
    
}

main();