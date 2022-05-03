class ContaBancaria{
   constructor(agencia, numero, tipo) {
       this.agencia = agencia;
       this.numero = numero;
       this.tipo = tipo;
       this._saldo = 0;
   }

   get saldo(){
       return this._saldo;
   }

   set saldo(val){
       this._saldo = val;
   }

   sacar(val){
       if (val > this._saldo) {
           return "Operação Negada";
       }
       this._saldo = this.saldo - val;
       return this._saldo;
   }

   depositar(val){
       this._saldo = this._saldo + val;
       return this._saldo;
   }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(val){
        this._cartaoCredito = val;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(val){
        if(val > 500){
            return "Operação Negada."
        }
        this._saldo = this._saldo - val;
    }
}

//criando uma nova conta corrente
const minhaConta = new ContaCorrente(1, 234, true);
console.log('Tipo de conta: ' + minhaConta.tipo);
console.log('saldo atual ' + minhaConta.saldo);
console.log('Depositar ' + minhaConta.depositar(1000));
console.log('saldo atual ' + minhaConta.saldo);
console.log('sacar 500 , novo saldo : ' + minhaConta.sacar(500));
console.log('saldo atual ' + minhaConta.saldo);
console.log('sacar 600 ' + minhaConta.sacar(600));
console.log('');

//criando uma nova conta poupança
const minhaPoup = new ContaPoupanca(234, 33);
console.log('Tipo de conta: ' + minhaPoup.tipo);
console.log('saldo atual ' + minhaPoup.saldo);