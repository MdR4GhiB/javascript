const todoList = [];

function renderTodoList(){
    let todoListHtml = '';
    for(i = 0; i < todoList.length; i++){
        let todoObject = todoList[i];
        const {name, dueDate} = todoObject;
        let html = `
            <p class="render-paragraph">
                <span class="task-name">${name}</span>
                <span class="task-date">${dueDate}</span>
                <button class="delete-btn"
                    onclick="
                        todoList.splice(${i}, 1);
                        renderTodoList();
                    "
                >Delete</button>
            </p>`;
        todoListHtml +=html;
    }

    document.querySelector('.todo-list').innerHTML = todoListHtml;
}

function addTodo(){
    const inputElement = document.querySelector('.input-js');
    const inputDate = document.querySelector('.input-date-js')
    const dueDate = inputDate.value;
    const name = inputElement.value.trim();

    if(name === '' || dueDate === ''){
        alert('Please Enter the all field');
        return;
    }

    todoList.push({
        name: name,
        dueDate: dueDate
    });
    console.log(todoList);

    renderTodoList();

    inputDate.value = '';
    inputElement.value = '';
}