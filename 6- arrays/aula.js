
// arrays são representados com colchetes[]

const squad=['camila', 'matheus', 'ana julia', 'rafael'];
console.log(squad[4]);

//  adicionando itens da lista 

squad.push('jonathan');
console.log(squad[4]);
console.log(squad);

// subsitituindo valores em arrays
squad[2]= 'leticia';
console.log(squad);

// array pode começar vazio e ir aadicionando objetos, ex:
const teste=[];
console.log(teste);

teste.push('oi tudo bem?');
teste.push('estudando javascript');
teste.push(978302);
console.log(teste);

//.pop remove o ÚLTIMO item adicionado
console.log(teste.pop());
console.log(teste);

//.shift remove o PRIMEIRO item adicionado
console.log(teste.shift());
console.log(teste);

//aula entendendo a necessidade de estruturas de repetição
const notas=[];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma= notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
//console.log(soma /5);


//estrutura for 

for (let i = 0; i < 10; i++) {
    console.log(i);
}

//for em strings 
const nome= 'Camila Yukari Yatabe';

for (let i = 0; i < nome.length; i++) {
    const letra= nome[i];
    console.log(letra);
}


