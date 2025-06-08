document.addEventListener("DOMContentLoaded", () => {
    updateTaskCount();
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.classList.add("task");

    li.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <label>${taskText}</label>
        <div class="task-buttons">
            <button class="edit" onclick="editTask(this)">✏️ Edit</button>
            <button class="delete" onclick="deleteTask(this)">🗑️ Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
    updateTaskCount();
}

function toggleTask(checkbox) {
    let task = checkbox.closest(".task"); // Ensure it gets the correct task
    task.classList.toggle("completed");
    updateTaskCount();
}

function deleteTask(button) {
    button.closest(".task").remove();
    updateTaskCount();
}

function editTask(button) {
    let task = button.closest(".task");
    let label = task.querySelector("label");
    let newText = prompt("Edit Task:", label.textContent);

    if (newText !== null && newText.trim() !== "") {
        label.textContent = newText.trim();
    }
}

function updateTaskCount() {
    let incompleteTasks = document.querySelectorAll(".task input:not(:checked)");
    document.getElementById("taskCount").textContent = incompleteTasks.length;
}
