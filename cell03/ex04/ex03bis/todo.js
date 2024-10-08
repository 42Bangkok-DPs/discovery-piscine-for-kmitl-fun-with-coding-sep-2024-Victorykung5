$(document).ready(function() {
    const listContainer = $('#ft_list');
    const newTaskButton = $('#new-task');

    const cookieString = document.cookie;
    const cookieArray = cookieString.split('; ');
    const tasksCookie = cookieArray.find(row => row.startsWith('tasks='));
    if (tasksCookie) {
        const tasks = JSON.parse(decodeURIComponent(tasksCookie.split('=')[1]));
        tasks.forEach(task => addTask(decodeURI(task)));
    }

    newTaskButton.on('click', () => {
        const task = prompt('Enter a new task:');
        if (task && task.trim() !== '') {
            addTask(task);
            saveTasks();
        }
    });

    function createTaskElement(taskText) {
        const taskElement = $("<div></div>");
        taskElement.addClass('todo');
        taskElement.text(taskText);
        taskElement.on('click', () => {
            if (confirm('Are you sure you want to delete this task?')) {
                taskElement.remove();
                saveTasks();
            }
        });
        return taskElement;
    }

    function addTask(taskText) {
        const taskElement = createTaskElement(taskText);
        listContainer.prepend(taskElement); 
    }

    function saveTasks() {
        const tasksString = encodeURIComponent(JSON.stringify(listContainer.children().map(function() {return encodeURI($(this).text());}).get().reverse()));
        console.log(tasksString);
        document.cookie = `tasks=${tasksString};`;
    }
});