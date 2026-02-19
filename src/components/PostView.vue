<template>
    <!-- <SinglePost  :postTitle = "postTitle" :id="postId"/> -->
  <SinglePost v-bind="postDetails" />
</template>

<script setup>
import SinglePost from '../components/SinglePost.vue'   // Local Registration(Tree Shaking friendly)
// const postTitle = ref("Communicatipn from Parent to Child Component");
// const postId = ref(3);
const postDetails = {
   postTitle : "Communicatipn from Parent to Child Component",
   id: 3
}
</script>