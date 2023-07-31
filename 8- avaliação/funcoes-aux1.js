
const nota= [-1]
let i=0;

function gets(){
    const numero= nota[i];
    i++;
    return numero;
}

function print(texto){
    console.log(texto);
}

module.exports= { gets, print };