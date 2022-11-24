const newTask = document.getElementById("new-task");
const newTaskButton = document.getElementById("new-task-button");
const tasksList = document.getElementById("tasks-list");
const selectAllTasks = document.getElementById("select-tasks");

newTaskButton.addEventListener("click", function() {
    let task = newTask.value;
    let spanElement = document.createElement("span");
    spanElement.addEventListener("click", toggleStatus);
    spanElement.innerText = task;

    let buttonElement = document.createElement("button");
    buttonElement.innerText = "✗";
    buttonElement.addEventListener("click", removeElement);

    let liElement = document.createElement("li");
    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);

    tasksList.appendChild(liElement);

    showOrHiddenSelectTasks();
});

function removeElement(e) {
    e.preventDefault();
    e.target.parentNode.remove();

    showOrHiddenSelectTasks();
};

function toggleStatus(e) {
    e.preventDefault();
    e.target.className = e.target.className === "" ? "deactive" : "";
}

function showOrHiddenSelectTasks() {
    let containerElement = document.getElementById("select-tasks-container");
    let tasks = document.querySelector("span");
    if(tasks === null) {
        containerElement.setAttribute("hidden", "hidden");
    } else {
        containerElement.removeAttribute("hidden");
    }
}

selectAllTasks.addEventListener("change", function(e) {
    e.preventDefault();
    console.log(e);
    return;
});