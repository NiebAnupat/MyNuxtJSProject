<template>
  <v-app>
    <v-app-bar flat light app>
      <v-icon large>mdi-playlist-check</v-icon>
      <v-toolbar-title class="headline ml-2">Todo Lists</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isLoggedIn"
        small
        color="secondary"
        class="subtitle-1 pa-3 py-6 white--text"
        @click="logout"
      >
        <v-icon class="mr-3">mdi-exit-run</v-icon>
        ออกจากระบบ
      </v-btn>
    </v-app-bar>
    <Nuxt style="margin-top: 5rem" />
  </v-app>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
     return !!this.$store.state.users.user
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('users/logout')
    },
  },
}
</script>

<style></style>
