const form = document.querySelector('#form');
const taskInput = document.querySelector('#container-form_input');
const taskList = document.querySelector('#list');
const task  = document.querySelector('.container-list-tasks')
let currentId = 0;
form.addEventListener('submit' , function (event) {
event.preventDefault();

const taskText = taskInput.value

const taskHTML = `<li class="container-list-tasks" id= "${currentId}">
<input type="text" style="display: none"  id="${`input-${currentId}`}"></input>
 <div class="container-list_name" id="${`taskName-${currentId}`}">${taskText}</div>
 <div class="container-list_buttons">
 <button type="button"  id="${`save-${currentId}`}" class="container-list_buttons-action" style="display: none">
 Save
 </button>
 <button type="button" data-action="edit" id="${`edit-${currentId}`}" class="container-list_buttons-action">
 Edit
 </button>
 <button type="button" data-action="delete"  id="${`delete-${currentId}`}" class="container-list_buttons-action">
 Delete
 </button>
 </div>
 </li>`;

taskList.insertAdjacentHTML('beforeend' , taskHTML);
taskInput.value = ""
currentId++ 

}) 

function eventHandler (event) {
const taskId = event.target.id.slice(5);
if(event.target.id.includes('edit')) {
  editTask(event);
} else if(event.target.id.includes('delete')) {
  deleteTask(event);
} else if(event.target.id.includes('save')) {
  saveEdTask(event);
}
 }

taskList.addEventListener('click' , eventHandler )
 
function deleteTask(event) {
  
  event.target.closest('li').remove()
} 

function editTask(event) {
  const taskId = event.target.id.slice(5);
  const taskParent = document.getElementById(`${taskId}`);
  const taskName = taskParent.querySelector('.container-list_name').textContent;
  taskParent.querySelector('input').value = taskName;
  toggleElementVisibility (`taskName-${taskId}`, false);
  toggleElementVisibility (`input-${taskId}`, true);
  toggleElementVisibility (`edit-${taskId}`, false);
  toggleElementVisibility (`save-${taskId}`, true);
} 

function saveEdTask(event) {
  const taskId = event.target.id.slice(5);
  const taskParent = document.getElementById(`${taskId}`);
  const taskName = taskParent.querySelector('input').value;
  taskParent.querySelector('.container-list_name').textContent = taskName;
  taskParent.querySelector('input').value = '';
  toggleElementVisibility (`taskName-${taskId}`, true);
  toggleElementVisibility (`input-${taskId}`, taskId, false);
  toggleElementVisibility (`edit-${taskId}`, true);
  toggleElementVisibility (`save-${taskId}`, false);
  }

function toggleElementVisibility (id, show) {
  const currentElement = document.getElementById(id);
  if(show === true) {
  currentElement.style.display = '';
  } else {
    currentElement.style.display = 'none';
   }
 }