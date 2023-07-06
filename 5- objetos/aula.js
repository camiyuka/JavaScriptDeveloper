
//um objeto js é uma coleção dinâmica de chave e valor
const pessoa={
    nome: "Camila Yukari Yatabe",
    idade: 19,
    descrever: function(){
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos`)    
    }
};

const atributo= 'idade';

console.log(pessoa[atributo]);
console.log(pessoa['nome']);

//dinâmico- pode ser recebido como parâmetro por exemplo
pessoa['nome'] = 'teste';
//acesso direto
pessoa.nome= 'teste';



/*
console.log(camila.nome);
console.log(camila.idade);
console.log(camila);

// de certa forma atualizou o objeto
camila.altura= 1.59;
console.log(camila);

*/