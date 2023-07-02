// condições booleanas
const numero= 0;

const numeroPar= (numero % 2) === 0;

const numeroDivisivelPor5 = (numero % 5 ) ===0;

console.log(numeroPar)


// if e else

if (numeroPar){
    console.log('é par');
}

else{
    console.log('impar')
}

if(numero===0){
    console.log('número inválido')
}

else if (numeroDivisivelPor5){
    console.log('o número é divisível por cinco')
}

else{
    console.log('o número não é divisível por cinco')
}

