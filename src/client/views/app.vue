<template lang="html">
  <div class="root bg-white">
    <div class="pa5 code dark-gray">
      <p class="f4 pb4">Project Seed</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import "~node_modules/tachyons-sass/tachyons.scss";
.root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
