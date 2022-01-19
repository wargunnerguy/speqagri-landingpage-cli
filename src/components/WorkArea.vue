<template>
  <section>
    <div class="card bg-transparent">
      <div class="section-heading pt-4">
        <h2>{{ $t("location") }}</h2>
      </div>
      <div id=map>
        <iframe width="100%" height="300px" frameborder="0" style="border:0"
                :src="'https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYYCdyCg4k0YRYGD8GG2zAAM&key=AIzaSyB682Q1mLjWfdfWFbuGr_2qV1pn4meJMZA&language=' + this.$i18n.locale"
                allowfullscreen></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "WorkArea"
}
</script>

<style scoped>


</style>