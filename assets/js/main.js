  
const input = document.querySelector('.input-tarefa');
const btn = document.querySelector('.btn-tarefa');
const tasks = document.querySelector('.tarefas');

function criaP(){
  const el = document.createElement("li");

  document.querySelector(".tarefas").appendChild(el);
}

function btnEnviar(){
  let texto = document.querySelector(".input-tarefa").value;
}

btn.addEventListener("click", btnEnviar);