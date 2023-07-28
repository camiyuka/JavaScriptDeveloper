
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

const notas=[];

notas.push(5,9);
notas.push(6.2);
notas.push(9.8);
notas.push(4.8);
notas.push(5.6);
notas.push(8.2);

let soma=0;     
// loop for para média de notas 
for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

 console.log(soma);
 const media= soma/notas.length;
 console.log(media.toFixed(2));



















