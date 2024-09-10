document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('ft_list');
    const newTaskButton = document.getElementById('new-task');

    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ');
    const tasksCookie = cookieArray.find(row => row.startsWith('tasks='));
    if (tasksCookie) {
            const tasks = JSON.parse(tasksCookie.split('=')[1]);
            tasks.forEach(task => addTask(task));
    }

    newTaskButton.addEventListener('click', () => {
        const task = prompt('Enter a new task:');
        if (task && task.trim() !== '') {
            addTask(task);
            saveTasks();
        }
    });

    function createTaskElement(taskText) {
        const taskElement = document.createElement('div');
        taskElement.className = 'todo';
        taskElement.textContent = taskText;
        taskElement.addEventListener('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                taskElement.remove();
                saveTasks();
            }
        });
        return taskElement;
    }

    function addTask(taskText) {
        const taskElement = createTaskElement(taskText);
        listContainer.insertBefore(taskElement, listContainer.firstChild);
    }

    function saveTasks() {
        const tasksString  = JSON.stringify(Array.from(listContainer.children).map(child => child.textContent).reverse());
        document.cookie = `tasks=${tasksString};`;
    }
});