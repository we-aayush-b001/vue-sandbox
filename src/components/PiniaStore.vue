<template>

    <main>
        <header>
            <img src="../assets/pinia-188hgpnebtsc1orlbq9hnq.webp" alt="pinia logo"/>
            <h2>Pinia Tasks</h2>
        </header>

        <div class="new-task-form">
            <TaskForm />
        </div>

        <nav class="filter">
            <button @click="filter = 'all'">All tasks</button>
            <button @click="filter = 'favs'">Fav tasks</button>
        </nav>

        <div class="task-list" v-if="filter === 'all'">
            <p>You have {{ taskStore.totalCount }} tasks left to do.</p>
            <div v-for="task in taskStore.tasks" :key="task.id">
                <TaskDetails :task="task" />
            </div>
        </div>
         <div class="task-list" v-if="filter === 'favs'">
            <p>You have {{ taskStore.favCount }} tasks in your favs list.</p>
            <div v-for="task in taskStore.favs" :key="task.id">
                <TaskDetails :task="task" />
            </div>
        </div>
    </main>

</template>



<script setup>
 import { ref } from 'vue';
import {useTaskStore} from '../stores/TaskStore';
 import TaskDetails from './TaskDetails.vue';
 import TaskForm from './TaskForm.vue';

 const taskStore = useTaskStore();
 const filter = ref('all');


</script>