//import { createApp } from 'vue'
//import App from './App.vue'

//createApp(App).mount('#app')

const app = Vue.createApp({
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
})
