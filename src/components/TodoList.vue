<template>
  <div>
    <ul>
      <TodoItem
        v-for="(todo, i) in todos"
        v-bind:todo="todo"
        v-bind:index="i"
        v-on:remove-todo="removeTodo"
      >
        <!--т.е. в новую переменную todo, которую бандим перадем то, что сформировали выше в цикле for-->
      </TodoItem>
    </ul>
  </div>
</template>

<script>
import TodoItem from "@/components/TodoItem";
export default {
  //в propse мы ожидаем
  props: ["todos"], // в массиве указываем каждый элемент, который мы принимаем - в нашем случае это массив todos
  components: {
    TodoItem, // регестрируем TodoItem, прописывем в 4 строке
  },
  methods: {
    removeTodo(id) {
      this.$emit("remove-todo", id);
      // this-попадает наше событие
      // console.log(id);
    },
  },
};
</script>

<style scoped>
/* scoped-собственые стили */
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>