<template>
  <v-container mt-5 class="blue-grey lighten-4 rounded">
    <h2 class="white--text text-center">Task View</h2>
    <v-divider class="mt-2"></v-divider>
    <list
      v-for="task in getTasks"
      :key="task.id"
      :task="task"
    />
  </v-container>
</template>

<script>
import list from '~/components/list.vue'
export default {
  name: 'listView',
  components: {
    list,
  },

  computed: {
    getTasks() {
      return this.$store.getters['todos/getTodos']
    },
  },
}
</script>

<style></style>
