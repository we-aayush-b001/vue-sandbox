<template>
  <div>
     <!-- <input type="text" :value="searchText" @input = "$emit('updateText', $event.target.value)" /> -->
      <input type="text" :value="modelValue" @input = "$emit('update:modelValue', $event.target.value)" />
  </div>
</template>


<script setup>
//   const props = defineProps({
//      searchText : {
//         type : String,
//         reuired : true
//      }
//   })

const props = defineProps({
     modelValue : {
        type : String,
        reuired : true
     }
  })

  const emit = defineEmits(['update:modelValue'])

</script>