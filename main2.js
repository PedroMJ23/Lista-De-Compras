const input = document.querySelector('.input-text');
const addForm = document.querySelector('#form');
const buttonAdd = document.querySelector('#btn');
const taskList = document.querySelector('.ul');
const quitarTodoBtn = document.querySelector('.quitarDatos');

let tasks = JSON.parse(localStorage.getItem('Tasks')) || [];
let ID = 1;
const createHTMLTask = ({id,name})=>{
    return 
 }

const renderTaskList = (tasks)=>{

    const todasLasTareas = tasks.map((tarea)=>{
        return `<li class="li-tasks">${tarea.name} <img class="deleteBtn" src="./assets/delete-button.png" data-id="${tarea.id}"  /></li> `
    }).join("");
    //console.log(todasLasTareas);

    taskList.innerHTML = todasLasTareas

};

const saveLocalStorage = (todoList) => {
    console.log(JSON.stringify(tasks), 'RESULTADO DEL STRINGIFY');
    localStorage.setItem('Tasks',JSON.stringify(todoList));
};

const addTask = (e)=> {
    e.preventDefault();
    
    const taskName = input.value 
    if(taskName.trim().length === 0)return; //una validación pequeña
    const newTask = {
        id:ID,
        name: taskName
    }
    ID++;
    input.value = '';
    console.log('New Task', newTask)
    //tasks.push(newTask)
    tasks = [
        ...tasks,
        newTask
    ]
    renderTaskList(tasks)
    hideDeleteAll(tasks)
    saveLocalStorage(tasks)
    //console.log(tasks)
  
};

const deleteTask = (e)=>{
   
    if(!e.target.classList.contains('deleteBtn') ) return;
    console.log(e.target)
    const taskIdToDelete = parseInt(e.target.dataset.id);
    //console.log('TASK ID',typeof taskIdToDelete)
    //console.log(taskIdToDelete)
    tasks = tasks.filter(task => task.id !== taskIdToDelete);
    console.log(tasks)
    
    renderTaskList(tasks);
    hideDeleteAll(tasks)
    saveLocalStorage(tasks)

};

const deleteAll = ()=>{
    tasks = [];
    renderTaskList(tasks)
    hideDeleteAll(tasks)
    saveLocalStorage(tasks)
};

const hideDeleteAll = todoList => { 
    if(todoList.length === 0){
        quitarTodoBtn.classList.add('hidden')
        return
    }quitarTodoBtn.classList.remove('hidden')
}

renderTaskList(tasks)
hideDeleteAll(tasks)
addForm.addEventListener('submit',addTask);
taskList.addEventListener('click', deleteTask )

quitarTodoBtn.addEventListener('click', deleteAll);

//OTRA MANERA DE HACERLO 
/*function init(){
    renderTaskList(tasks)
hideDeleteAll(tasks)
addForm.addEventListener('submit',addTask);
taskList.addEventListener('click', deleteTask )

quitarTodoBtn.addEventListener('click', deleteAll);
}
init();*/







