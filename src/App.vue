<template>
  <Counter />
  <br/>
  <calc />
  <!-- <SinglePost  :postTitle = "postTitle" :id="postId"/> -->
   <SinglePost v-bind="postDetails"/>

   <!-- More easy way using two way binding by the help of v-model  -->
   <!-- <CustomInput :searchText = "searchText" @updateText="searchText = $event" />  -->
    <!-- // second method  -->
     <CustomInput v-model="searchText" />
     <!-- below is the extended version of this statement -->
     <!-- <CustomInput :modelValue="searchText" @update:modelValue="(newValue) => (searchText = newValue)" /> -->
   <h3>Parent : {{ searchText }}</h3>
   <!-- <SlotComponent>Click Slot</SlotComponent> -->
    <SlotComponent>
      <span style="color:red">Click</span>
      <span>Me</span>
    </SlotComponent>
    <SlotComponent/>
</template>


<script setup>
import { ref } from 'vue';
import calc from './components/Calc.vue';   // Local Registration(Tree Shaking friendly)
import SinglePost from './components/SinglePost.vue';
import CustomInput from './components/CustomInput.vue';
import SlotComponent from './components/SlotComponent.vue';

const postTitle = ref("Communicatipn from Parent to Child Component");
const postId = ref(3);
const postDetails = {
   postTitle : "Communicatipn from Parent to Child Component",
   id: 3
}

const searchText = ref("");

</script>



<style scoped></style>
