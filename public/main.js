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
      assignee: document.getElementById("inputGroupSelect01").value,
    }),
  })
    .then(function (data) {
      console.log(data.body);
      location.reload();
    })
    .catch(function (error) {
      console.log("Request failure: ", error);
    });
});

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragEnd(event) {}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event, el) {
  console.log(event.target.textContent);

  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  el.appendChild(document.getElementById(data));
  console.log(data);
  console.log("name", document.getElementById(data).getAttribute("data-name"), "status", event.target.getAttribute("data-name"));

  fetch("/tasks/status", {
    method: "PUT",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
    body: JSON.stringify({
      name: document.getElementById(data).getAttribute("data-name"),
      status: event.target.getAttribute("data-name"),
    }),
  })
    .then(function (data) {
      console.log(data.body);
    })
    .catch(function (error) {
      console.log("Request failure: ", error);
    });
}
