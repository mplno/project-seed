<template lang="html">
  <p>
    Vuex says: {{data}}
  </p>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$store.state.someData
    }
  }
}
</script>

<style lang="css">
</style>
