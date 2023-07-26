/* 
1- crie uma classe para representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado. Crie um método que dado a quantidade de quilômetros e o preço  do combustível nos dê o valor gasto  em reais para realizar esse percurso
*/
//crindo a classe carro 
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca= marca;
        this.cor= cor;
        this.gastoMedioPorKm= gastoMedioPorKm;
    }

    // criando o método para calcular gasto de percurso
    calcularGastoDePercurso(distancia, preco){
    }
}

// criando a instância 
const uno= new Carro('Fiat', 'Verde claro', 1/12);
const honda= new Carro('Honda', 'Preto', 1/10);

console.log(uno);



