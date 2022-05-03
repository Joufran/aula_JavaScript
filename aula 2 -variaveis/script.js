//tipos primitivos

//Tipos boolean
var VouF = false;
console.log(VouF)
console.log(typeof(VouF));

//tipos number
var num = 1;
console.log(num);
console.log(typeof(num));

//tipos string
var nome = 'Marcelo';
console.log(nome);
console.log(typeof(nome));

//Function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar variáveis
var variavel;
console.log(variavel);
var variavel1 = 'Marcelo';
console.log(variavel1);

let variavel2;
variavel2 = 'cruz';
console.log(variavel2);

const constante = 'vasconcelos';
console.log(constante);

//Tipos de Escopo
var escopoGlobal = 'GLOBAL';
console.log(escopoGlobal);

function escopoLocal() {
    let escopoLocalInterno = 'LOCAL'; 
    console.log(escopoLocalInterno);
}

escopoLocal();

//Atribuição - Atribuindo valor a uma variável sinal de =
var atribuicao = 'valor';
//Comparação - Compara se dois valores são iguais, usando sinal de ==
var comparacao;
comparacao = '0' == 0;
console.log(comparacao);
//Comparação Identica - verifica se o valor e o tipo das variáveis são iguais, através de ===
var comparacaoIdentica;
comparacaoIdentica = '0'=== 0;
console.log(comparacaoIdentica);

//Operadores Aritméticos
//Adição
var adicao = 1 + 1 ;
console.log('1+1 = ' + adicao);
//subtração
var subtracao = 1 - 1 ;
console.log('1-1 = ' + subtracao);
//multiplicação
var multiplicacao = 3 * 3 ;
console.log('3*3 = ' + multiplicacao);
//Resultado de divisão
var divisaoReal = 6 / 2 ;
console.log('6/2 = ' + divisaoReal);
//Sobra de divisão
var divisaoInteira = 5 % 2 ;
console.log('sobra de 5/2 = ' + divisaoInteira);
//potenciação
var potenciacao = 3 ** 3 ;
console.log('3^3 = ' +potenciacao);

//Operadores Relacionais 
//Maior Que
var maiorQue = 5 > 2 ;
console.log('5>2 ' + maiorQue);
//Menor Que
var menorQue = 5 < 2 ;
console.log('5<2  ' + menorQue);
//Maior ou Igual a 
var maiorOuIgual = 5 >= 5 ;
console.log('5>=5  ' + maiorOuIgual);
//Menor ou igual a 
var menorOuIual = 5 <= 2 ;
console.log('5<=2  ' +menorOuIual);

//Operadores Lógicos
//E
var logicoE = ( 2 > 2 ) &&  ( 2  >= 2 ) ;
console.log('2>2 E 2>=2 ' + logicoE);
//OU
var logicoOu = ( 2 > 2 ) || ( 2 >= 1 ) ;
console.log('2>2 ou 2>=2 ' + logicoOu);
//NÃO
var logicoNao =  ! ( 2>1 ) ;
console.log('Contrário de 2>1 (true) é ' + logicoNao);
