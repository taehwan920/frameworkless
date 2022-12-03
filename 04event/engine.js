import getTodos from "./getTodos.js";
import todosView from "./views/todos.js";
import counterView from "./views/counter.js";
import filtersView from "./views/filters.js";

import registry from "./registry.js";
import { applyDiff } from "./virtualDOM.js";

registry.add("todos", todosView);
registry.add("counter", counterView);
registry.add("filters", filtersView);

const state = {
  todos: getTodos(),
  currentFilter: "All",
};

const render = () => {
  window.requestAnimationFrame(() => {
    const main = document.querySelector(".todoapp");
    const newMain = registry.renderRoot(main, state);
    applyDiff(document.body, main, newMain);
  });
};

render();
