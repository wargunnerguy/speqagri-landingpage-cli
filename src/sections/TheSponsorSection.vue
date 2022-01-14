<template>
  <section id="sponsor" class="section">
    <div class="container">
      <img src="@/assets/img/leader.gif" alt=""/>
      <h1>{{ $t("sponsor_heading_1") }}</h1>
      <p>{{ $t("sponsor_message_1") }}</p>
      <h1>{{ $t("sponsor_heading_2") }}</h1>
      <p>{{ $t("sponsor_message_2") }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheSponsorSection"
}
</script>

<style scoped>
section {
  background-color: #dfd4be;
}
</style>