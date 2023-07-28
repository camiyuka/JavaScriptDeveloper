// funções gets e print
// mocado- vem de mocket- simulando uma função

function gets(){
    return 10;
}

function print(texto){
    console.log(texto);
}

// a exportação de arquivos acontece aqui
   
module.exports=  { gets: gets, print: print };
 //ou
 // modeulo.exports.gets= gets;