// Tipos de Funções

//Declarativas
function funcao() {
    console.log('sou uma mensagem de uma função declarativa.');
}

funcao();

//Expressões de Função
// 01 com nomeação
var funcaoExpressao = function func() {
    console.log('Sou uma mensagem de função de expressão.');
}

funcaoExpressao();

//02 sem nomeação
var funcaoExpressao2 = function() {
    console.log('Sou uma mensagem de função de expressão sem nome.');
}

funcaoExpressao2();

//Arrow Function
var funct = ( ) => {
    console.log('sou uma mensagem de arrow function');
}

funct();

//Funções Aritméticas