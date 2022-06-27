<template>
  <v-container
    :style="
      $vuetify.breakpoint.xl
        ? `padding-right: 20%; padding-left: 20%;`
        : $vuetify.breakpoint.lg
        ? `padding-right: 10%; padding-left: 10%;`
        : $vuetify.breakpoint.md
        ? `padding-right: 10%; padding-left: 10%;`
        : $vuetify.breakpoint.sm
        ? `padding-right: 20%; padding-left: 20%;`
        : ``
    "
  >
    <formTask />
    <v-divider class="mt-5"></v-divider>
    <listView />
  </v-container>
</template>

<script>
import formTask from '~/components/formTask.vue'
import listView from '~/components/listView.vue'
export default {
  components: {
    formTask,
    listView,
  },
  middleware: ['auth'],
}
</script>

<style></style>
