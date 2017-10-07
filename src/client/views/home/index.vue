<template lang="html">
  <div class="">
    <p><strong>Route name:</strong> {{routeName}}</p>
    <p><strong>Message:</strong> {{message}}</p>
    <p @click="fetch" class="underline pointer mt4">Fetch data</p>
  </div>
</template>

<script>
export default {
  computed: {
    message () {
      return this.$store.state.message
    },
    routeName () {
      return this.$router.currentRoute.name
    }
  },
  methods: {
    fetch () {
      this.$http.get('/api/data')
        .then((response) => {
          this.$store.commit('updateMessage', response.body.message)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="css">
</style>
