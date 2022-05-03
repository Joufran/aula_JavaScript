function calculadora() {
    const operacao = prompt('Escolha uma operação:\n+ - para soma \n - - para subração \n * - para multiplicação \n / - para divisão');
    
    if (Number(operacao)) {
        erro();
    }else{

        const a = prompt('Digite o primeiro número: '); 
        const b = prompt('Digite o segundo número: ');

        const num1 = Number(a);
        const num2 = Number(b);

        function soma(x , y) {
            alert(`A soma de ${x} mais ${y} será : ${x + y}`);
            novaOperacao()
        }; 
        
        function subtracao(x , y) {
            alert(`A subtração de ${x} menos ${y} será : ${x - y}`);
            novaOperacao()
        }; 
    
        function multiplicacao(x , y) {
            alert(`A multiplicação de ${x} por ${y} será : ${x * y}`);
            novaOperacao()
        }; 
    
        function divisao(x , y) {
            alert(`A divisão de ${x} por ${y} será : ${x / y}`);
            novaOperacao()
        }; 

        switch (operacao) {
            case '+' :
                soma(num1 , num2);
                break;
            case '-' :
                subtracao(num1 , num2);
                break
            case '*' :
                multiplicacao(num1 , num2);
                break
            case '/' :
                divisao(num1 , num2);
                break        
            default:
                alert("Escolha uma opção válida");
                calculadora();
                break;
        }

    function novaOperacao() {
        const confirm = prompt('Deseja realizar novamente a operação ?\n s - Para Sim \n ou tecle qualquer letra para encerrar.');
    
            if (confirm == 's') {
                calculadora();
            } else{
                alert('Até mais!');
            }
        } 
    
    function erro() {
        alert('Erro - Operação inválida!');
        calculadora(); 
    }    
    }
        
}

calculadora();

