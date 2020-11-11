const todos = [];

const Item = (todo) => `
  <li
    class="item"
    id="${todo.id}"
  >
    <span class="texttodo"}">
      ${todo.text}
    </span>
    <button
      class="todobtn danger"
      data-type="delete"
    >
      Удалить
    </button>
  </li>
  `;

const Template = `
  <form id="formtodo" class="formtodo">
      <input
        type="texttodo"
        class="inputtodo"
        id="inputtodo"
        placeholder="Название услуги"
      >
      <button
        class="todobtn"
        data-type="add"
      >
        Добавить
      </button>
  </form>
  <ul id="list" class="list">
      ${todos.reduce(
        (html, todo) =>
          (html += `
            ${Item(todo)}
          `),
        ""
      )}
  </ul>
  `;

// оборачиваем код в IIFE
function doToDo() {
  (() => {
    todolist.innerHTML = `
    <h2 class="servicetodo">Какую ещё услугу вы бы хотели видеть в нашей компании</h2>
    <h1 id="counter" class="counter">
      ${todos.length} предложений
    </h1>
    ${Template}
  `;

    inputtodo.focus();

    // создаем экземпляр MutationObserver
    const observer = new MutationObserver(() => {
      const count = todos.length;

      counter.textContent = `
      ${count > 0 ? `${count} предложение` : "Предложений пока нет"}
    `;
    });

    // начинаем наблюдать за списком и его дочерними элементами
    observer.observe(list, {
      childList: true,
    });

    const addTodo = () => {
      if (!inputtodo.value.trim()) return;

      const todo = {
        id: Date.now().toString().slice(-4),
        text: inputtodo.value,
      };

      list.insertAdjacentHTML("beforeend", Item(todo));

      todos.push(todo);

      inputtodo.value = "";
      inputtodo.focus();
    };

    const deleteTodo = (item) => {
      const index = todos.findIndex((todo) => todo.id === item.id);

      item.remove();

      todos.splice(index, 1);
    };

    formtodo.onsubmit = (e) => e.preventDefault();

    todolist.addEventListener("click", (e) => {
      if (e.target.tagName !== "BUTTON") return;

      // получаем тип кнопки и элемент списка
      const { type } = e.target.dataset;
      const item = e.target.parentElement;

      // в зависимости от типа кнопки вызываем ту или иную функцию
      switch (type) {
        case "add":
          addTodo();
          break;
        default:
          deleteTodo(item);
          break;
      }
    });
  })();
}

export default doToDo;
