//Exercicio de fixação de Operadores em JavaScrip

function comparacao(a , b) {
    if (a === b) {
        console.log('Os números ' + a + ' e ' + b + ' são iguais.');
        resSoma(a + b);
    } else {
        console.log('Os números  ' + a + ' e ' + b + ' são diferentes.');
        resSoma(a + b);
    }
}

function resSoma(c) {
    if (c > 10) {
        console.log('sua soma é ' + c + ' é maior que 10');
            if (c > 20) {
                console.log('e é maior que 20.');
            } else {
                console.log('e menor que 20');
            }
    } else {
        console.log('sua soma é menor que 10 e menor que 20');
    }
}

comparacao(10 , 15);





