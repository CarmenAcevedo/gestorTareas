import { getTask  } from "./task";

// Función para mostrarle al usuario las tareas
export const renderTask = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";
    const tasks = getTask();
    tasks.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);

        // Añadir clase si la tarea esta completada
        if(task.completed === true) {
            li.classList.add("completed");
        }

        li.innerHTML = `
            ${ task.text }
            <button class = "delete"> Eliminar </button>
            <button class = "toggle"> ${ task. completed === true ? "Deshacer" : "Completar" }  </button>
        `;

        taskList.appendChild(li);
    });
};