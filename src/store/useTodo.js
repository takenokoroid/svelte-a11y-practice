import { writable } from "svelte/store";

const exModel = [
  {
    title: "部屋を掃除する",
    detail: "トイレ掃除・本棚の整理",
    deadline: "2022-05-06",
  },
];

const todo = writable(exModel);

export const useTodo = {
  subscribe: todo.subscribe,
  set: (todo) => {
    todo.set(todo);
  },
  delete: () => {
    todo.set({});
  },
  addTodo: (arg) => {
    todo.update((todo) => {
      return [...todo, arg];
    });
  },
  editTodo: (arg, index) => {
    todo.update((todo) => {
      todo[index] = arg;
      return [...todo];
    });
  },
  deleteTodo: (index) => {
    todo.update((todo) => {
      todo.splice(index, 1);
      console.log(todo);
      return [...todo];
    });
  },
};
