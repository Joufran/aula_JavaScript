
// O que são vetores ou Arrays

//Como declarar um array
let array = ['string',1,true];
console.log(array);
//guarda varios tipos de dados inclusive array
let array1 = ['string',1,true,['array1'],['array2']];
console.log(array1);
console.log(array1[1]);

//Manipulando Array
//forEach
let exArray = [1,2,3,4,5,6,7];
console.log('Array com 7 números com seus indices no array');
exArray.forEach(function(item, index){console.log(item, index)});
//push
console.log('Array com 7 números com mais um item');
exArray.push(8);
console.log(exArray);
//pop
console.log('Array com 8 números retirando o último item ');
exArray.pop(exArray);
console.log(exArray);
//shift
console.log('Array com 7 números retirando o primeiro item');
exArray.shift(exArray);
console.log(exArray);
//unshift
console.log('Array acrecentando um item no lugar do que foi retirado');
exArray.unshift(0);
console.log(exArray);
//indexOf
console.log('Mostrando o indice do número 5 dentro do array');
console.log(exArray.indexOf(5));
//splice
console.log('Exibe até a posição 2 e depois exibe apartir do 4 elemento e o resto apaga');
exArray.splice(4 , 2);
console.log(exArray);
//slice não deu certo
let novoArray = [1,2,3,4,5,6,7];
console.log('Exibe até a posição 2');
console.log(novoArray.slice(0,2));

//Objetos
let object = {
    string: 'string',
    number: 1,
    Boolean: true,
    array: ["array"],
    objectInterno: {objectInterno :'ojbeto interno' }   
};
console.log(object);
//exibe apenas 1 propriedade
console.log('somente 1 item do objeto');
console.log(object.number);