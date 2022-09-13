<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
      <!-- "|"вызов фильтра -->
    </span>
    <button class="delete" v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
    <!-- спец символ -->
    <!-- $emit-метод для передачи информаци одного компонента в другой -->
  </li>
</template>

<script>
export default {
  props: {
    // валидируем входящие параметры, ожидаем из компонента
    todo: {
      type: Object, // тип у данного свойства должен быть Object
      required: true, // укажем флаг required, что если todo сюда не передан, тогда компонент не сможет работать
    },
    index: Number,
  },
  filters: {
    // свойство filters
    uppercase(value) {
      return value.toUpperCase(); // приведем к верхнему регистру
    },
  },
};
</script>
<style scoped>
li {
  display: flex;
  justify-content: space-between;
  border: 1px solid #cccc;
  margin-bottom: 10px;
  padding: 10px;
}
.delete {
  background-color: #3f3f8f;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  font-weight: bold;
  width: 20px;
  height: 20px;
  font-size: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
input {
  margin-right: 15px;
}
.done {
  text-decoration: line-through;
}
</style>