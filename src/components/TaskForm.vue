<template>
  <form class="task-form" @submit.prevent="onAdd">
    <label for="name">Name:</label>
    <br />
    <input id="name" v-model="name" />
    <br />
    <label for="description">Description:</label>
    <br />
    <textarea id="description" v-model="description"></textarea>
    <br />
    <label for="endDate">End Date: </label>
    <br />
    <input type="date" id="endDate" v-model="endDate" />
    <br />
    <br />
    <input class="button" type="submit" value="Add Task" />
  </form>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      name: "",
      description: "",
      endDate: "",
      complete: null,
    };
  },
  methods: {
    onAdd() {
      if (this.name === "") {
        alert("Task name is incomplete.");
        return;
      }

      let task = {
        name: this.name,
        description: this.description,
        endDate: this.endDate,
        complete: this.complete,
      };

      this.$emit("task-added", task);

      this.name = "";
      this.description = "";
      this.endDate = "";
      this.complete = null;
    }
  }
};
</script>

<style>
</style>