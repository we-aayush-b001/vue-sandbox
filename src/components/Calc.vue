<template>
  <div>
    <input type="number" v-model.number="num1" />
    <input type="number" v-model.number="num2" />
    
    <p>Sum: {{ num1 + num2 }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const num1 = ref(0)
const num2 = ref(0)
</script>