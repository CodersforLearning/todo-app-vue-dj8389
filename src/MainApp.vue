<template>
    <h1>To Do App</h1>
    <TaskForm @task-added="addTask"></TaskForm>
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