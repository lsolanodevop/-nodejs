//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo() 
    {    
    // const _unCompletedTask = this.tasks.filter(tasks => tasks.completed != true); Modo Leo
    // const _unCompletedTask = this.tasks.filter((task)=> Metodo Andrew no tan abreviado
    // {
    //     return task.completed === false;
    // });
    // console.log(_unCompletedTask);
    // Filtro funciona con una variable como parametro y ese es el que voy a usar como condicional 
    return this.tasks.filter((task) => task.completed === false);
    }
}

console.log(tasks.getTasksToDo())
// tasks.getTasksToDo();