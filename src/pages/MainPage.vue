<template>
  <the-navbar></the-navbar>
  <section class="apply-now">
    <div class="container">
      <div class="card bg-transparent border-0 p-5">
        <img class="card-img align-self-center" :src="require(`@/assets/img/logo-image-speq-agri.png`)" alt="">
        <the-text-scroller-gadget class="card-body"></the-text-scroller-gadget>
      </div>
    </div>
  </section>
  <the-services></the-services>
  <the-machines></the-machines>
  <the-sponsor-section></the-sponsor-section>
  <the-footer></the-footer>
</template>

<script>
import TheServices from "@/sections/TheServices";
import TheSponsorSection from "@/sections/TheSponsorSection";
import TheTextScrollerGadget from "@/components/TheTextScrollerGadget";
import TheMachines from "@/sections/TheMachines";

export default {
  name: "MainPage",
  components: {
    TheServices,
    TheSponsorSection,
    TheTextScrollerGadget,
    TheMachines,
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

