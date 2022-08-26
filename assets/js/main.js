  
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
  createBtnDelete(li)
}

function clearInput() {
  input.value = '';
  input.focus();
}

function createBtnDelete(li) {
  li.innerText += ' ';
  const btnDelete = document.createElement('button');
  btnDelete.innerText = 'Apagar';
  btnDelete.setAttribute('class', 'apagar');
  btnDelete.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(btnDelete);
}

btn.addEventListener("click", function(){
  if(!input.value) return;
  criaTasks(input.value);
  clearInput();
})

input.addEventListener("keypress", function(e){
  if( e.keyCode === 13) {
    if(!input.value) return;
    criaTasks(input.value); 
    clearInput()
  } 
});



