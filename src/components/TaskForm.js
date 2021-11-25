//import { apply } from "core-js/fn/reflect";

app.component('task-form', {
    template:
        /*html*/
        `
        <form class="task-form" @submit.prevent="onAdd">
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="description">Description:</label>
        <textarea id="description" v-model="description"></textarea>
        
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate" v-model="endDate">

        <!-- this should call method -->
        <input class="button" type="submit" value="Add Task"> 

        </form>
        `,
    data() {
        return {
            name: '',
            description: '',
            endDate: '',
            complete: null
        }
    },
    methods: {
        onAdd() {
            if (this.name === '')
            {
                alert('Task name is incomplete.');
                return;
            }

            let task = {
                name: this.name,
                description: this.description,
                endDate: this.endDate,
                complete: this.complete
            }

            this.$emit('task-added', task)
            
            this.name = ''
            this.description = ''
            this.endDate = ''
            this.complete = null
        }
    }
})