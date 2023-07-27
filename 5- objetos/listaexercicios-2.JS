/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa{
    nome;
    peso;
    altura;

    // construtor
    constructor(nome, peso, altura){
        this.nome=nome;
        this.altura= altura;
        this.peso= peso;
        this.altura= altura;
    }

    // métodos
    calcularIMC(peso, altura){
      return this.peso/Math.pow(this.altura, 2);
    }

    classificarIMC(peso,altura){
        const imc= this.calcularIMC();
      if(imc<18.5){
        return 'abaixo do peso'
    } else if(imc >=18.5 && imc <25){
        return 'peso normal'
    } else if (imc >=25 && imc < 30){
        return 'acima do peso'
    } else if(imc >=30 && imc < 40){
        return 'obeso'
    } else{ 
        return'obesidade grave'
    }

    }
}

const camila= new Pessoa('Camila Yukari Yatabe', 54, 1.59);
console.log(camila.classificarIMC());

const mirian= new Pessoa('Mirian Yoshie Yatabe',49, 1.50);
console.log(mirian.classificarIMC());

const diogo= new Pessoa('Diogo da Silva Menezes', 71, 1.77);
console.log(diogo.classificarIMC());
