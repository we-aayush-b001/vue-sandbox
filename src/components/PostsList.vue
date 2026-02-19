<template>
  <div>
    <h2>Posts List</h2>

    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>

    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.title }}</strong>
        <p>{{ post.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])
const loading = ref(false)
const error = ref(null)

const fetchPosts = async () => {
  try {
    loading.value = true
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    posts.value = response.data
  } catch (err) {
    error.value = 'Failed to fetch posts'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchPosts()
})
</script>
