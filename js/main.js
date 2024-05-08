const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>
                <input type="checkbox" class="taskCheckbox">
                <span class="taskText">${taskText}</span>
            </div>
            <button class="deleteTask">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
        li.querySelector('.deleteTask').addEventListener('click', deleteTask);

        const taskTextElement = li.querySelector('.taskText');
        taskTextElement.addEventListener('click', function() {
            editTask(this);
        });
    }
}

function deleteTask() {
    this.parentNode.remove();
}

function editTask(taskTextElement) {
    const span = taskTextElement;
    const input = document.createElement('input');
    input.type = 'text';
    input.value = span.innerText;
    input.classList.add('editTaskInput');
    span.replaceWith(input);
    input.focus();
    input.addEventListener('blur', function() {
        span.innerText = input.value;
        input.replaceWith(span);
    });
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});
