<template>
  <v-container>
    <signIn v-if="!getRegister"  @toggleRegister="toggleRegister" />
  <register v-else @toggleRegister="toggleRegister"/>
  </v-container>
</template>

<script>
import signIn from '~/components/signIn.vue'
import register from '~/components/register.vue'
export default {
  components: {
    signIn,register
  },
  data() {
    return {
      getRegister: false,
    }
  },
  computed:{
    
  },

  methods: {
    toggleRegister() {
      this.getRegister = !this.getRegister;
    },
  },
}
</script>

<style></style>
