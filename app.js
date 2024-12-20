const form = document.getElementById("form");
const text = document.getElementById("text");
const lists = document.querySelector(".lists");
let data = [];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // const div = document.createElement("div");
  // div.classList.add("list_item");
  // if (text.value === " ") {
  //   text.style.borderColor = "red";
  // } else {
  //   div.innerHTML = `
  //   <span>${text.value}</span>
  //   <i class"fa-solid fa-pen"></i>`;
  //   lists.append(div);
  // }
  // text.value = "";
  let name = form.name.value;
  let surname = form.surname.value;
  let age = form.age.value;

  validateValue(name, surname, age);
  if (name.trim() && surname.trim() && age.trim()) {
    data = [...data, { name, surname, age, id: Date.now() }];
    AddTodo(data);
  }
});

function AddTodo(data) {
  lists.innerHTML = "";
  data.forEach((value) => {
    const div = document.createElement("div");
    div.classList.add("list_item");
    div.innerHTML = `
  <span>name:${value.name}</span>
  <span>surname:${value.surname}</span>
  <span>age:${value.age}</span>
  <button id=${value.id} class="btn2">delete</button>`;
    lists.append(div);
  });
}

function validateValue(name, surname, age) {
  name.trim() === ""
    ? (document.querySelector(".eror1").style.display = "block")
    : (document.querySelector(".eror1").style.display = "none");
  surname.trim() === ""
    ? (document.querySelector(".eror2").style.display = "block")
    : (document.querySelector(".eror2").style.display = "none");
  age.trim() === ""
    ? (document.querySelector(".eror3").style.display = "block")
    : (document.querySelector(".eror3").style.display = "none");
}
lists.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn2")) {
    deletetodo(e.target.id);
  }
});
function deletetodo(id) {
  data = data.filter((value) => value.id !== +id);
  AddTodo(data);
}
