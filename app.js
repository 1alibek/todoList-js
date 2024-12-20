document.getElementById("todoAdd").addEventListener("click", function (event) {
  event.preventDefault();
});

let todoList = loadTodos(); 
let todoItem = todoList.length; 

function loadTodos() {
  const storedTodos = localStorage.getItem("todoList");
  if (storedTodos) {
    const todos = JSON.parse(storedTodos);
    todos.forEach((todo, index) => {
      document.getElementById(
        "todoUl"
      ).innerHTML += `<li>${todo}<button class="delete-botton" id="delete-${index}" onclick="deleteTodo(this.id)"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="edit-botton" id="edit-${index}" onclick="editTodo(this.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="done-botton" id="done-${index}" onclick="doneTodo(this.id)"><i class="fa fa-check" aria-hidden="true"></i></button></li>`;
    });
    return todos;
  }
  return [];
}

function saveTodos() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

function addTodo() {
  let todoText = document.getElementById("todoText").value.trim();
  if (todoText === "") {
    alert("Please Enter a Value");
  } else if (todoList.indexOf(todoText) !== -1) {
    alert(`"${todoText}" Already Exists in the List`);
  } else {
    todoList.push(todoText);
    saveTodos();
    document.getElementById(
      "todoUl"
    ).innerHTML += `<li>${todoList[todoItem]}<button class="delete-botton" id="delete-${todoItem}" onclick="deleteTodo(this.id)"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="edit-botton" id="edit-${todoItem}" onclick="editTodo(this.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="done-botton" id="done-${todoItem}" onclick="doneTodo(this.id)"><i class="fa fa-check" aria-hidden="true"></i></button></li>`;
    document.getElementById("todoText").value = "";
    todoItem += 1;
  }
}

function deleteTodo(clickedId) {
  const todoIndex = parseInt(clickedId.split("-")[1]);
  todoList.splice(todoIndex, 1);
  saveTodos();
  document.getElementById(clickedId).parentElement.remove();
  todoItem -= 1;
}

function doneTodo(clickedId) {
  const todoElement = document.getElementById(clickedId).parentElement;
  if (todoElement.style.textDecoration === "line-through") {
    todoElement.style.textDecoration = "none";
    document.getElementById(
      clickedId
    ).innerHTML = `<i class="fa fa-check" aria-hidden="true"></i>`;
  } else {
    todoElement.style.textDecoration = "line-through";
    document.getElementById(
      clickedId
    ).innerHTML = `<i class="fa fa-repeat" aria-hidden="true"></i>`;
  }
}

function editTodo(clickedId) {
  const todoIndex = parseInt(clickedId.split("-")[1]);
  const todoElement = document.getElementById(clickedId).parentElement;

  if (todoElement.innerHTML.indexOf("input") === -1) {
    const currentText = todoList[todoIndex];
    todoElement.innerHTML = `<form><input id="editInput-${todoIndex}" type="text" value="${currentText}"></input><input style="display:none" type="submit" id="editSubmit-${todoIndex}" onclick="editTodoSubmit(this.id)"></input></form>`;
    todoElement.innerHTML += `<button class="edit-botton" id="edit-${todoIndex}" onclick="editTodoSubmit('editSubmit-${todoIndex}')"><i class="fa fa-floppy-o" aria-hidden="true"></i></button>`;
  }
}

function editTodoSubmit(clickedId) {
  const todoIndex = parseInt(clickedId.split("-")[1]);
  const newValue = document
    .getElementById(`editInput-${todoIndex}`)
    .value.trim();

  if (newValue !== "") {
    todoList[todoIndex] = newValue;
    saveTodos(); 
    document.getElementById(
      `edit-${todoIndex}`
    ).parentElement.innerHTML = `${newValue}<button class="delete-botton" id="delete-${todoIndex}" onclick="deleteTodo(this.id)"><i class="fa fa-trash" aria-hidden="true"></i></button><button class="edit-botton" id="edit-${todoIndex}" onclick="editTodo(this.id)"><i class="fa fa-pencil" aria-hidden="true"></i></button><button class="done-botton" id="done-${todoIndex}" onclick="doneTodo(this.id)"><i class="fa fa-check" aria-hidden="true"></i></button>`;
  } else {
    alert("Please enter a valid value");
  }
}
