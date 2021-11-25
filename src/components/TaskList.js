app.component('task-list', {
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    template:
        /*html*/
        `
        <div class="task-list">
        <table>
            <tr>
                <th id="name-header">Name</th>
                <th id="description-header">Description</th>
                <th id="endDate-header">End Date</th>
                <th>Complete</th>
            </tr>
            <tr v-for="task in tasks">
                <td id="name-header">{{task.name}}</td>
                <td id="description-header">{{task.description}}</td>
                <td id="endDate-header">{{task.endDate}}</td>
                <td>{{task.complete}}</td>
            </tr>
        </table>
        </div>
        `
})