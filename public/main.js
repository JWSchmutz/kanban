function addTask() {
  //   const taskDiv = document.createElement("div");
  //   taskDiv.setAttribute("id", "new-task");
  //   const content = document.createTextNode("Card Name");
  //   taskDiv.append(content);
  //   const placeDiv = document.getElementById("to-do");
  //   document.getElementById("to-do").append(taskDiv);
}

// document.getElementById("jeremiah").addEventListener("click", ()=>{
//     const element= document.getElementById("assigned-to");
//     element.classList.add("jeremiah")
// })

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

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
  document.getElementById("demo").innerHTML = "Started to drag the p element";
}

function dragEnd(event) {
  document.getElementById("demo").innerHTML = "Finished dragging the p element.";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}
