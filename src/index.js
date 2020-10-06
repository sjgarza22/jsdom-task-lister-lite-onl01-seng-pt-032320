document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.getElementById("create-task-form").addEventListener("submit", function(event) {
    event.preventDefault()

    const task = document.forms["create-task-form"]["new-task-description"].value;
    const list = document.getElementById("tasks");
    const newTask = document.createElement("LI");
    newTask.innerHTML = task + " <button>X</button>";
    list.append(newTask);
    taskRemoval();
    document.forms["create-task-form"].reset();
  });

  function taskRemoval() {
    const btn = document.querySelectorAll("ul li button");
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", function(e) {
        btn[i].parentElement.remove();
      });
    };
  }
});
