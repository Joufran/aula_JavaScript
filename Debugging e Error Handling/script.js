function debbug(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros");
        if (typeof arr !== 'object') throw new TypeError("O array precisa do tipo object");
        if (typeof num !== 'number') throw new TypeError("É preciso de um número para comparação");
        if (arr.length != num) throw new RangeError("Tamanho diferente do que o array");

        return arr;

    } catch (error) {
        if (error instanceof ReferenceError) {
            console.log("Esse erro é um ReferenceError!");
            console.log(error.message); 
        } else if (error instanceof TypeError) {
            console.log("Esse erro é um TypeError!");
            console.log(error.message); 
        } else if (error instanceof RangeError) {
            console.log("Esse erro é um RangeError!");
            console.log(error.message); 
        }else{
            console.log("Tipo de erro não esperado: " + error);
        }
    }
}

const meuArray=[1,2,3,4,5,6,7];

console.log(debbug(5,5));