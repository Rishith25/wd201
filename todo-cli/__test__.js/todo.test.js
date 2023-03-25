/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// const { beforeAll } = require('jest-circus');
const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

// eslint-disable-next-line no-undef
describe("Todolist Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
      // dueDate : new Date().toLocaleDateString("en-CA")
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
      // dueDate : new Date().toLocaleDateString("en-CA")
    });
    expect(all.length).toBe(todoItemsCount + 1);
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
