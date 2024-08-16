import "./styles.css";
import { addTask, deleteTask, toggleTask } from "./task";
import { renderTask } from "./ui";

document.addEventListener("DOMContentLoaded", () => {
    renderTask();

    document.getElementById("task-form").addEventListener("submit", (e) => {
        e.preventDefault();

        const taskInput = document.getElementById("task-input").value;
    });
});