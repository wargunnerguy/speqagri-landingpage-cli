<template>
  <base-poster>
    <header>
      <h1 class="p-5">Sellist lehte ei leidu kahjuks</h1>
      <h3 class="p-5">Võib olla on leht kolinud või muutsid käsitsi aadressi..</h3>
    </header>
  </base-poster>
</template>

<script>
import BasePoster from "@/layout/BasePoster";

export default {
  name: "NotFound",
  components: {
    BasePoster
  }
}
</script>

<style scoped>

</style>
