// enum Status{
//   Uncompleted,
//   Completed
// }

class Task {
  constructor(text) {
    this.text = text;
    this.status = "Uncompleted";
  }
}

class TasksManger {
  constructor(todos, id) {
    this.todos = [];
    this.currentId = 0;
  }

  add(/*this*/ task) {
    // if (typeof text !== "string" || text.length <= 2) {
    //   throw new Error("Task must be more then two characters");
    // }

    this.todos.push(task);
  }
  delete(text) {
    for (let i = 0; i < this.todos.length; i++) {
      if (text == this.todos[i].text) {
        this.todos.splice(i, 1);
      }
    }
  }
  deleteAt(index) {
    this.todos.splice(index, 1);
  }
  edit(old, newText) {
    for (let i = 0; i < this.todos.length; i++) {
      if (old == this.todos[i].text) {
        this.todos[i].text = newText;
      }
    }
  }
  mark(text) {
    for (let i = 0; i < this.todos.length; i++) {
      if (text == this.todos[i].text) {
        this.todos[i].status = "Completed";
      }
    }
  }
}

const todoManger = new TasksManger();
// console.log(todoManger);
// todoManger.add("hello1");
// todoManger.add("hello2");
// todoManger.add("hello3");
// todoManger.add("hello4");
// todoManger.add("aaa");

// console.log(new TasksManger());

document.getElementById("todo-btn").addEventListener("click", function () {
  var ul = document.getElementById("todo-list");
  var li = document.createElement("li");
  var text = document.getElementById("todo-input").value;
  if (text.length > 0) {
    li.classList.add("list-group-item");
    li.classList.add("cursor-pointer");
    li.innerHTML =
      ' <i class="bi bi-trash-fill text-danger" onclick="remove(this)"></i> <i class="bi bi-pencil-fill text-danger" onclick="edit(this)"></i><span onclick="mark(this)" class="ms-2">' +
      text +
      "</span>";
    ul.appendChild(li);
    var task = new Task(text);
    todoManger.add(task);
  } else {
    alert("empty task");
  }
  document.getElementById("todo-input").value = "";
});

function remove(row) {
  var li = row.parentNode;
  var ul = document.getElementById("todo-list");
  ul.removeChild(li);
  todoManger.delete(row.parentNode.childNodes[4].innerHTML);
}

function mark(span) {
  span.classList.add("text-decoration-line-through");
  todoManger.mark(span.parentNode.childNodes[4].innerHTML);
}

function edit(toEdit) {
  var val = prompt("enter value");
  todoManger.edit(toEdit.parentNode.childNodes[4].innerHTML, val);
  toEdit.parentNode.childNodes[4].innerHTML = val;
}
