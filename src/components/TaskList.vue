<template>
  <div class="container">
    <table class="table table-striped table-bordered table-hover table-condensed">
      <tr>
        <th id="name-header">Name</th>
        <th id="description-header">Description</th>
        <th id="endDate-header">End Date</th>
        <th>Complete</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td id="name-header">{{ task.name }}</td>
        <td id="description-header">{{ task.description }}</td>
        <td id="endDate-header">{{ task.endDate }}</td>
        <td>
          <input type="checkbox" />
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
  },
};
</script>

<style>


</style>