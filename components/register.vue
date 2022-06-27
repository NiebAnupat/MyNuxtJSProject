<template>

  <v-card elevation="13" shaped class="pa-10 mx-auto my-auto" width="40%">
  
      <h2>Register Email</h2>
    <v-form @submit.prevent="register" >
      <v-text-field
        v-model="user.email"
        prepend-icon="mdi-account"
        label="E-Mail"
        :rules="rules"
      ></v-text-field>
      <v-text-field
        v-model="user.password"
        prepend-icon="mdi-lock"
        label="Password"
        type="password"
      ></v-text-field>

      <v-card-actions>
        <v-btn type="submit"> Register </v-btn>
        <v-btn @click="$emit('toggleRegister')"> Back </v-btn>
      </v-card-actions>
    </v-form>

    <!-- ________________________________________________________________________ -->

    <v-snackbar v-model="isError">
      {{ errorMessage }}
      <template #action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="isError = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>

  </v-card>

</template>

<script>
export default {
  name: 'signIn',
  data() {
    return {
      user: { email: '', password: '' },

      rules: [
        (value) => !!value || 'Required.',
        (value) => (value || '').length <= 20 || 'Max 20 characters',
        (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      ],

      isError: false,
      errorMessage: '',
    }
  },
  methods: {
    register() {
      // eslint-disable-next-line node/handle-callback-err
      this.$store.dispatch('users/register', this.user).catch((error) => {
        this.isError = true
        this.errorMessage = error.code
        setTimeout(() => {
          this.isError = false
        }, 5000)
      })

    },

    // registerAnnonymous() {
    //   // eslint-disable-next-line node/handle-callback-err
    //   this.$store.dispatch('users/registerAnnonymous', this.user).catch((error) => {
    //     this.isError = true
    //     this.errorMessage = error.code
    //     setTimeout(() => {
    //       this.isError = false
    //     }, 5000)
    //   })

    // },
  },
}
</script>

<style></style>
