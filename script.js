function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    var taskList = document.getElementById("taskList");

    var li = document.createElement("li");
    li.innerText = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.onclick = function() {
        li.remove();
    };

    var completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.classList.add("complete");
    completeButton.onclick = function() {
        li.classList.toggle("completed");
    };

    li.appendChild(deleteButton);
    li.appendChild(completeButton);

    taskList.appendChild(li);

    taskInput.value = "";
}
