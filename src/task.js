// Traer la lista de tareas del almacenamiento local
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Una función para agregar una tarea
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        competed: false,
    };
    task.push(newTask);
    localStorage.setItem("task", JSON.stringify(tasks));
};

// Función para eliminar una tarea
export const deleteTask = (id) => {
    task = tasks.filter((task) => task.id !== parseInt(id));
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Función para actualizar la tarea
export const toggleTask = (id) => {
tasks = tasks.map((task) => {
    if (task.id === parseInt(id)) {
        task.competed = !task.competed;
    }
    return task;
});
    localStorage.setItem("task", JSON.stringify(tasks));
};

// Función para llevar las tareas
export const getTask = () => tasks;
