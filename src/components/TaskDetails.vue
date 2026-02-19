<template>
<div class = "task">
 <h5>{{ task.title }}</h5>
 <div class="icons">
      <i 
        class="material-icons" 
        @click="taskStore.deleteTask(task.id)">
        delete
      </i>
      <i 
        class="material-icons"
        :class="{active: task.isFav}" 
        @click="taskStore.toggleFav(task.id)">
        favorite
      </i>
 </div>
</div>
</template>


<script setup>
import { useTaskStore } from '../stores/TaskStore'
const props = defineProps(['task']);
const taskStore = useTaskStore();

</script>