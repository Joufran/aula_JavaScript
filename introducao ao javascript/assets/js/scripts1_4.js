var listaDeAfazer = document.getElementById('tarefa');
listaDeAfazer.addEventListener("click" , incluir);
var toDo = 0;

function incluir() {
    listaDeAfazer.innerHTML = toDo;
}