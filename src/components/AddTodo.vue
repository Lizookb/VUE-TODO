<template>
  <form @submit.prevent="onSubmmit">
    <input type="text" v-model="title" />
    <!-- синхронизация между объектом input и title -->
    <button type="submit">Create toDo</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  methods: {
    onSubmmit() {
      // console.log(this.title);
      if (this.title.trim()) {
        //обрезка слева-справа(пустота)
        const newToDo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };
        // console.log(newToDo);
        this.$emit("add-todo", newToDo);
      }
    },
  },
};
</script>
