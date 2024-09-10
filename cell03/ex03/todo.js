let ft_list = document.getElementById('ft_list');
        let newTask = document.getElementById('new-task');

        newTask.addEventListener('click', () => {
            let task = prompt('Enter new task');
            if (task) {
                let newTodo = document.createElement('div');
                newTodo.classList.add('todo');
                newTodo.textContent = task;
                newTodo.addEventListener('click', () => {
                    if (confirm('Are you sure you want to delete this task?')) {
                        newTodo.remove();
                    }
                });
                ft_list.insertBefore(newTodo, ft_list.firstChild);
            }
        });