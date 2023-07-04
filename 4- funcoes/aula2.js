
function sayMyName(name){
    return('meu nome é ' + name);
}

function verificarIdade(idade){
    if(idade>=18){
        console.log('maior de idade');
    } else{
        console.log(sayMyName('camila ') + ('menor de idade'));
    }
}

verificarIdade('12');

