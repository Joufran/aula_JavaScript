//Atividade 01

//Solução 01

function verificaPalindromo(frase) {
    if (frase.leght >= 0) {
        console.log(frase);
        //split separa todas as letras em array e conta a quantidade de letras
        var normal = frase.split("");
        console.log(normal);
        //reverse inverte o conteudo do array de trás para frente
        var inverso = normal.reverse();
        console.log(inverso);
        //join concatena todas as letras que estavam separadas no array
        var fraseInversa =inverso.join("");
        console.log(fraseInversa);

            if (frase === fraseInversa) {
                console.log('A palavra é palindromo.');
            } else {
                console.log('Frase não é palindromo.');
            }  
    }else{
        console.log('Não há conteúdo válido!');
    }
    
}

verificaPalindromo('1');

//solução 2
//omo
//012
//
function verificaPalindromo2(frase) {
    if(!frase) {
        console.log('Não há string');
    }else{
            //conta a metade de caracteres da frase e faz o teste 
            for (let i = 0 ; i < frase.length/2 ; i++){
            //pega o primeiro e compara com o ultimo e sucessivamente até o final
            if(frase[i] !== frase[frase.length - 1 - i]){
                console.log('não é palindromo.');   
                }else{
                console.log('é palindromo.');
                }
            }
        }
    
}

verificaPalindromo2('');


//Atividade 02
function verificaPar(vet) {
    if (!vet) {
        console.log(-1);
    } else{
        for (let i = 0; i < vet.length; i++) {
            if (vet[i] === 0) {
                console.log('já é zero');
            } else if (vet[i] % 2 === 0){
                console.log(`substituindo ${vet[i]} por 0...`);
                vet[i]=0;
            }
        }
        console.log(vet);   
    }
}

let array = [0,1, 3, 4, 6, 80, 33, 23, 90];
verificaPar(array);


