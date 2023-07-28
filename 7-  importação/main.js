
// função para importação de arquivos: REQUIRE
const {gets, print}= require('./funcoes-auxiliares');

const numerosSorteados= [];

for (let i = 0; i < 5; i++) {
    const numerosSorteados = gets();
    numerosSorteados.push(numerosSorteados);
};



//object destructuring - destruir um objeto
const pessoa={
    nome: 'vitor'
}

const {nome} = pessoa;
//const nome= pessoa.nome

