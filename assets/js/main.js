  
const input = document.querySelector('.input-tarefa');
const btn = document.querySelector('.btn-tarefa');
const tasks = document.querySelector('.tarefas');

function criaLi(){
  const li = document.createElement("li");
  return li;
}

function criaTasks(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tasks.appendChild(li)
}

btn.addEventListener("click", function(){
  if(!input.value) return;
  criaTasks(input.value)
})

input.addEventListener("click", function(){
    if(!input.value) return;
    criaTasks(input.value)
  }
)

