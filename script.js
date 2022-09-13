class Task {
  constructor(text) {
    this.text = text;
    this.isDone = "Uncompleted";
  }
}

class TasksManger {
  constructor(todos, id) {
    this.todos = [];
    this.currentId = 0;
  }

  add(/*this*/ text) {
    if (typeof text !== "string" || text.length <= 2) {
      throw new Error("Task must be more then two characters");
    }

    this.todos.push(new Task(text));
  }

  remove(/* this */ id) {
    for (const found of this.todos) {
      if (new Task(this.currentId) !== this.currentId) {
        return found;
      }
    }
  }

  changeCompleted(id, isDone = null) {}
}

const todoManger = new TasksManger();
console.log(todoManger);
todoManger.add("hello1");
todoManger.add("hello2");
todoManger.add("hello3");
todoManger.add("hello4");
todoManger.add("aaa");
todoManger.remove(0);
console.log(todoManger.remove());

// console.log(new TasksManger());
