<template>
  <the-navbar></the-navbar>
  <section class="apply-now" id="apply">
    <div class="container">
      <div class="card bg-transparent border-0 p-5">
        <img class="card-img align-self-center" :src="require(`@/assets/img/logo-image-speq-agri.png`)" alt="">
        <the-text-scroller-gadget class="card-body"></the-text-scroller-gadget>
      </div>
    </div>
  </section>

  <the-services></the-services>

  <section class="our-facts">
    <div class="container">
      <div class="row">

      </div>
    </div>
  </section>
  <the-sponsor-section></the-sponsor-section>
  <the-footer></the-footer>
</template>

<script>
import TheServices from "@/sections/TheServices";
import TheSponsorSection from "@/sections/TheSponsorSection";
import TheTextScrollerGadget from "@/components/TheTextScrollerGadget";

export default {
  name: "MainPage",
  components: {
    TheServices,
    TheSponsorSection,
    TheTextScrollerGadget
  }
}
</script>
<style scoped>

img {
  width: min-content;
  height: min-content;
  padding-top: 7rem;
  padding-bottom: 3rem;
}

</style>

