function addTask() {
  //   const taskDiv = document.createElement("div");
  //   taskDiv.setAttribute("id", "new-task");
  //   const content = document.createTextNode("Card Name");
  //   taskDiv.append(content);
  //   const placeDiv = document.getElementById("to-do");
  //   document.getElementById("to-do").append(taskDiv);
}

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

document.getElementById("create-task-button").addEventListener("click", () => {
  fetch("/tasks", {
    method: "POST",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      name: document.getElementById("task-name").value,
      assignee: document.getElementById("assign-name").value,
    }),
  })
    .then(function (data) {
      console.log("Request success: ", data);
    })
    .catch(function (error) {
      console.log("Request failure: ", error);
    });
});
