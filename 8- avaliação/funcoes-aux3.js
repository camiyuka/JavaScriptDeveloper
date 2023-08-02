
module.exports = {gets, print};

entradas=[2500, 250];
i=0

function gets(){
    const valor= entradas[i]
    i++
    return valor;
}

function print(texto){
    console.log(texto);
}