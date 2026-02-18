<template>
 <h1>{{ postTitle }}-{{ id }}</h1>
</template>

<script setup>
const props = defineProps({
    // postTitle : String,
    // postTitle : [Number ,String],
    postTitle : {
        type: String,
        required : true,  //default value is false
    },
    id: Number,
    postDetails : {
        type : Object,
        default(rawProps){
            return {title:'Default', id : 100};
        }
    },
    message : {
      validator(value){
        return ['success', 'warning']
      }
    },
    updateTitle : {
        type : Function,
        default(){
            return "Example for passing function as a prop"
        }
    }
})

console.log(props.postTitle+"===>");
</script>