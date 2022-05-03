//Atividade 01

const meuMap = new Map();

function getAdmins(mapa) {
    let admins = [];
    for ([key, value] of mapa) {
        if (value === 'adm') {
            admins.push(key);
        }
    }
    return admins;
}

meuMap.set('Marcelo' , 'adm');
meuMap.set('Leonardo' , 'soc');
meuMap.set('Flávia' , 'adm');
meuMap.set('Milena' , 'soc');
meuMap.set('Sandra' , 'soc');

console.log(getAdmins(meuMap));

//Atividade 02

function valorUnicoSet(vet) {
    const arraySet = new Set (vet);
    //spread ... separa cada elemento de forma independente 
    return [...arraySet];
}

const array1 = [30, 30, 40, 5, 223, 2049, 3034, 5];

console.log(valorUnicoSet(array1));