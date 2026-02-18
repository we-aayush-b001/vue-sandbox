<template>
  <Counter />
  <br/>
  <calc />
  <!-- <SinglePost  :postTitle = "postTitle" :id="postId"/> -->
   <SinglePost v-bind="postDetails"/>
</template>


<script setup>
import { ref } from 'vue';
import calc from './components/Calc.vue';   // Local Registration(Tree Shaking friendly)
import SinglePost from './components/SinglePost.vue';

const postTitle = ref("Communicatipn from Parent to Child Component");
const postId = ref(3);
const postDetails = {
   postTitle : "Communicatipn from Parent to Child Component",
   id: 3
}
</script>



<style scoped></style>
