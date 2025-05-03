// Selecionando elementos do DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
 
// Função para adicionar uma nova tarefa
function addTodoItem(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário
 
    // Pegando o valor do input
    const todoText = todoInput.value.trim();
 
    // Verificando se o input não está vazio
    if (todoText !== '') {
        // Criando elementos para a nova tarefa
        const li = document.createElement('li');
        li.textContent = todoText;
 
        // Criando botão de remover tarefa
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Remover';
        deleteButton.classList.add('delete');
        li.appendChild(deleteButton);
 
        // Adicionando evento de completar tarefa
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });
 
        // Adicionando evento de remover tarefa
        deleteButton.addEventListener('click', function() {
            todoList.removeChild(li);
        });
 
        // Adicionando a tarefa à lista
        todoList.appendChild(li);
 
        // Limpando o input
        todoInput.value = '';
    }
}
 
// Adicionando evento de submit ao formulário
todoForm.addEventListener('submit', addTodoItem);
