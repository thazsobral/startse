const newTask = document.getElementById("new-task");
const newTaskButton = document.getElementById("new-task-button");
const tasksList = document.getElementById("tasks-list");

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
});

function removeElement(e) {
    e.preventDefault();
    e.target.parentNode.remove();
};

function toggleStatus(e) {
    e.preventDefault();
    e.target.className = e.target.className === "" ? "deactive" : "";
}