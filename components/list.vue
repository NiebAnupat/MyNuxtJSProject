<template>
  <div>
    <v-container mt-2 class="white rounded">
      <v-layout row wrap class="ma-2">
        <v-row >
          <v-col md="1" sm="1" lg="1" xl="1"  align-self="center"  >
            <v-checkbox
              :input-value="task.status"
              color="success"
              hide-details
              class=" mb-sm-3 mb-md-3 ml-md-1 mb-lg-5 ml-lg-3"
              @change="toggleStatus"
            ></v-checkbox>
          </v-col>
          
          <v-col  sm="11" md="" >
            <h2 :class=" task.status !== true ? `` : `grey--text text--darken-1  text-decoration-line-through`">{{ task.title }}</h2>
            <v-divider width="50%"></v-divider>
            <v-text-field
              :value="task.description"
              readonly
              style="cursor: default"
              
              :class=" task.status !== true ? `` :`grey--text text-decoration-line-through`"
            ></v-text-field>
          </v-col>
          <v-col sm="12" md="3" lg="2" align-self="center" class="text-center">
            <v-btn class="pa-5" :width="$vuetify.breakpoint.sm? `100%`:``" @click="remove">
              <v-icon class="mr-2 ml-n1">mdi-delete</v-icon>
              Delete</v-btn
            >
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'list',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },
  
  methods: {
    toggleStatus() {
      this.$store.dispatch('todos/toggle', this.task)
    },
    remove() {
      this.$store.dispatch('todos/remove',this.task)
    }
  },
}
</script>

<style></style>
