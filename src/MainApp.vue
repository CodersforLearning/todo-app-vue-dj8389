<template>
    <h1 class="container">To Do App</h1>
    <TaskForm class="container" @task-added="addTask"></TaskForm>
    <br>
    <br>
    <TaskList :tasks="tasks"></TaskList>

</template>

<script>
import TaskList from './components/TaskList.vue'
import TaskForm from './components/TaskForm.vue'


export default {
    name: 'MainApp',
    components: {
        TaskList,
        TaskForm
    },
    data() {
        return {
            tasks: [{
                name: 'Task1',
                description: '...',
                endDate: 'tmrw',
                complete: true
            },
            {
                name: 'Task2',
                description: '1234',
                endDate: '..',
                complete: false

            }]
        }
    },
    methods: {
         addTask(task) {
            this.tasks.push(task)
        }
    }

}

</script>

<style>

</style>