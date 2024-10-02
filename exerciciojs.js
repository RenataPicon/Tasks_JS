const tasks = [
    {descrição: 'petshop' , prioridade: 3, status: 'pendente'},
    {descrição: 'mercado', prioridade: 1 , status: 'executada'},
    {descrição: 'roupas', prioridade: 5, status: 'pendente'},
    {descrição: 'estudar' , prioridade: 4, status: 'pendente'},
    {descrição: 'alimentação', prioridade: 2 , status: 'executada'},
];

const sortTasks = tasks.sort((a, b) => {
    if (a.prioridade < b.prioridade)
        return (-1);
    if (a.prioridade > b.prioridade)
        return (1)
    return 0;
});

tasks.push({descrição: 'ler', prioridade: 6, status: 'pendente'});
console.log(tasks);

const removeCompletedTasks = tasks.filter(task => task.status === 'pendente');
console.log(removeCompletedTasks);

const updatedTasks = tasks.map(task => {
    if (task.prioridade === 3) {
       return {descrição: 'petshop', prioridade: 3, status: 'executada'};
    }else{
        return task;
    }
});
console.log(updatedTasks)

const updatedPendingTasks = updatedTasks.filter(task => task.status === 'pendente'); 
console.log('Tarefas pendentes:', updatedPendingTasks);


const pendingCount = tasks.reduce((count, task) => task.status === 'pendente' ? count + 1 : count, 0);
console.log('Total de tarefas pendentes:', pendingCount);

const findDescription6 = tasks.find(task => task.descrição === 'mercado');
console.log(findDescription6)

const verifyAllConcluded = tasks.every(task => {
    if (tasks === 'executada'){
        return true;
    }else{
        return false;
    }
});
console.log(verifyAllConcluded)