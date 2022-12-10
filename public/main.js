function addTask() {
  //   const taskDiv = document.createElement("div");
  //   taskDiv.setAttribute("id", "new-task");
  //   const content = document.createTextNode("Card Name");
  //   taskDiv.append(content);
  //   const placeDiv = document.getElementById("to-do");
  //   document.getElementById("to-do").append(taskDiv);
}

document.getElementById("create-task-button").addEventListener("click", () => {
  fetch("/tasks", {
    method: "POST",
    // headers: {
    //   'auth': '1234'
    // },
    body: JSON.stringify({
      name: document.getElementById("task-name").value,
      asignee: document.getElementById("assign-name").value,
    }),
  })
    .then(function (data) {
      console.log("Request success: ", data);
    })
    .catch(function (error) {
      console.log("Request failure: ", error);
    });
});
