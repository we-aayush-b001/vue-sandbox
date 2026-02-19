<template>
<!-- More easy way using two way binding by the help of v-model  -->
   <!-- <CustomInput :searchText = "searchText" @updateText="searchText = $event" />  -->
    <!-- // second method  -->
     <CustomInput v-model="searchText" />
     <!-- below is the extended version of this statement -->
     <!-- <CustomInput :modelValue="searchText" @update:modelValue="(newValue) => (searchText = newValue)" /> -->
   <h3>Parent : {{ searchText }}</h3>
</template>

<script setup>
import { ref } from 'vue';
import CustomInput from './CustomInput.vue';
const searchText = ref("");
</script>