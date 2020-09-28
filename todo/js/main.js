const form = document.querySelector('#newTaskForm');
const input = document.querySelector('#addNewTask');
const ul = document.querySelector('#list-group');

ul.innerHTML = localStorage.getItem('ul');

const newTask = (text) => {
    return `<li class="list-group-item d-flex justify-content-between">
                <span contenteditable="true" class="task-title">${text}</span>
                <div>
                    <button type="button" data-action="ready" class="btn btn-light align-self-end">Готово</button>
                    <button type="button" data-action="delete-task" class="btn btn-light align-self-end">Удалить</button>
                </div>
            </li>`
}

const emptyListItem = () => {
    return `<li id="empty-list-item" class="list-group-item text-center">Список дел пуст</li>`
}

const checkTasksQuantity = () => {
    if(ul.querySelectorAll('li').length === 0) {
        ul.insertAdjacentHTML('afterbegin', emptyListItem());
    } else if (ul.innerHTML.includes(emptyListItem())) {
        ul.querySelector('#empty-list-item').remove();
    }
}

checkTasksQuantity();

const saveData = () => {
    localStorage.setItem('ul', ul.innerHTML);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    ul.insertAdjacentHTML('afterbegin', newTask(input.value));
    input.value = '';
    input.focus();
    checkTasksQuantity();
    saveData();
})

ul.addEventListener('click', (e) => {
    const listGroupItem = e.target.closest('.list-group-item');
    switch(e.target.getAttribute('data-action')) {
        case 'delete-task':
            listGroupItem.remove();
            checkTasksQuantity();
            saveData();
            break;
        case 'ready':
            listGroupItem.querySelector('.task-title').classList.add('task-title--done');
            listGroupItem.querySelector('.task-title').setAttribute('contenteditable', 'false');
            listGroupItem.querySelector('[data-action="ready"]').remove();
            saveData();
            break;
    }
})