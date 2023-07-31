
// função para importação de arquivos: REQUIRE
const {gets, print}= require('./funcoes-auxiliares');

/* uma sala contém 5 alunos e para cada aluno fo sorteado um número de 1 a 100.
Faça um programa que receba 5 números sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada:
5
50
10
98
23

saída: 98 */

let maiorValorEncontrado= 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if(numeroSorteado > maiorValorEncontrado){
        maiorValorEncontrado = numeroSorteado;
    }

}   

print(maiorValorEncontrado);

//object destructuring - destruir um objeto
const pessoa={
    nome: 'vitor'
}

const {nome} = pessoa;
//const nome= pessoa.nome

