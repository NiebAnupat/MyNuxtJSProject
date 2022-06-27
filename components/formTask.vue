<template>
  <div class="mt-10">
    <v-container class="blue-grey lighten-4 rounded">
      <h2 class="white--text text-center">Add Task Form</h2>
      <v-layout row wrap class="pa-5">
        <v-flex sm12 md12 lg12 class="mb-sm-n8">
          <v-text-field
            v-model="task.title"
            label="Task Title"
            placeholder="Enter title"
            outlined
            background-color="white"
            class="mx-4 mt-3"
          ></v-text-field>
        </v-flex>
        <v-flex sm12 md8 lg9 xl9 class="px-sm-3">
          <v-text-field
            v-model="task.description"
            placeholder="Enter description"
            rounded
            background-color="white"
            height="50"
          ></v-text-field>
        </v-flex>
        <v-flex v-if="$vuetify.breakpoint.sm" sm12>
          <v-divider class="my-2"></v-divider>
        </v-flex>
        <v-flex sm12 md4 lg3 xl3 align-self-center class="px-sm-3 text-center">
          <v-btn
            rounded
            large
            color="dark"
            :width="$vuetify.breakpoint.sm ? `100%` : ``"
            class="white"
            @click="add"
            ><v-icon class="mr-2">mdi-plus</v-icon>Add task</v-btn
          >
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'formTask',
  data() {
    return {
      task: {
        title: '',
        description: '',
      },
    }
  },
  methods: {
    async add() {
      await this.$store
        .dispatch('todos/add', this.task)
        .then(() => {
          this.task = {
            title: '',
            description: '',
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
}
</script>

<style></style>
