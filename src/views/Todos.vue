<template>
  <div id="app">
    <h1>Todo application</h1>
    <AddTodo v-on:add-todo="addToDo" />

    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="uncompleted">Uncompleted</option>
    </select>
    <hr />
    <Loader v-if="loading" />

    <!--указываем название переменной, которую хотим передать - todos и в качестве значения передаем массив todos-->
    <Todolist
      v-else-if="filteredToDo.length"
      v-bind:todos="filteredToDo"
      v-on:remove-todo="removeTodo"
    >
    </Todolist>
    <p v-else>No todos</p>
    <!-- bind передаём перемене todos в todolist -->
  </div>
</template>

<script>
import Todolist from "@/components/TodoList"; // значек @ всегда указывает на папку src
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      todos: [
        // { id: 1, title: "Купить хлеб", completed: false },
        // { id: 2, title: "Купить масло", completed: false },
        // { id: 3, title: "Купить кефир", completed: false },
      ],
      loading: true,
      filter: "all",
    };
  },
  computed: {
    filteredToDo() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "completed") {
        return this.todos.filter((t) => t.completed);
      }
      if (this.filter === "uncompleted") {
        return this.todos.filter((t) => !t.completed);
      }
    },
  },
  components: {
    // Todolist : Todolist // если ключ и значение совпадают, то оставляем только ключ
    Todolist, // если ключ и значение совпадают, то оставляем только ключ
    AddTodo,
    Loader,
  },
  methods: {
    removeTodo(id) {
      console.log(id);
      this.todos = this.todos.filter((t) => t.id !== id);
      //УДАЛЯЕМ
    },
    addToDo(todo) {
      this.todos.push(todo);
    },
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      // ?_limit=3-через queryparametr передаём лимит элементов
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        });
      });
  },
};
</script>

<style>
#app {
  background-color: #a0a0ed;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
