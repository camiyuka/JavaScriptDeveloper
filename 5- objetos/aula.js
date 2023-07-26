// exemplo:
// objeto é uma coleção de dados, com chave e valor

class Pessoa {
    nome ; 
    idade ;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome= nome;
        this.idade= idade;
        this.anoDeNascimento= 2023 - idade;
    }

    descrever() { //this refere-se ao próprio objeto
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p2.nome} tem a mesma idade que ${p1.nome}`);
    }
}
//instância de objeto

        const camila= new Pessoa('Camila', 19);
        const carol= new Pessoa('Carolina', 20);
        const mirian= new Pessoa('Mirian', 52);
        const henrique= new Pessoa('Henrique', 13);
        const yoshiaki= new Pessoa('Yoshiaki', 49);

        compararPessoas(yoshiaki, mirian);
        compararPessoas(henrique, carol);
        compararPessoas(camila, yoshiaki);

/*

const camila= new Pessoa();
camila.nome= 'Camila Yukari Yatabe';
camila.idade= 19;

const henrique= new Pessoa();
henrique.nome='Henrique Kenji Yatabe';
henrique.idade=13;

console.log(camila);
console.log(henrique);

objeto camila 
const camila{
    nome= 'camila';
    idade=19; 
}
const atributo= 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);

//acesso dinâmico- pode ser recebido como parâmetro por exemplo
pessoa['nome'] = 'teste';
//acesso direto
pessoa.nome= 'teste';

console.log(camila.nome);
console.log(camila.idade);
console.log(camila);

// de certa forma atualizou o objeto
camila.altura= 1.59;
console.log(camila);
//um objeto js é uma coleção dinâmica de chave e valor

*/

