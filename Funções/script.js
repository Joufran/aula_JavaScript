//Atividade 01

const aluno = [
    {
    nome:'joão',
    nota: 5,
    turma: 18,
    },
    {
    nome:'sofia',
    nota: 9,
    turma: 18,
    },
    {
    nome:'paulo',
    nota: 3,
    turma: 20,
    },
];


function cadaAluno(aluno , media) {
    //array iniciado fora do for para que não fosse startado sempre quando percorresse o for
    let aprovado = [];

  for (let i = 0 ; i < aluno.length ; i++) {
    //object destruction {} que pega apenas as informações que será usado
    let { nota , nome } = aluno[i];
                 
    if (nota >= media) {
        //push ele acrescenta no final do array a informação
         aprovado.push(nome);
    }
      
  }  
  //return finaliza a operação e retorna o resultado
  return aprovado;
}


console.log(cadaAluno(aluno , 5));

//Atividade 02

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Marcelo',
    idade: 44,
};

const pessoa2 = {
    nome: 'Leonardo',
    idade: 37,
};

console.log(calculaIdade.call(pessoa1,30));
console.log(calculaIdade.apply(pessoa2,[30]));