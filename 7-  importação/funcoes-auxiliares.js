// funções gets e print
// mocado- vem de mocket- simulando uma função

const entradas= [5, 50, 10, 98, 23];
let i= 0; 

function gets(){
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto){
    console.log(texto);
}

// a exportação de arquivos acontece aqui
   
module.exports=  { gets: gets, print: print };
 //ou
 // modeulo.exports.gets= gets;