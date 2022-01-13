<template>
  <the-navbar></the-navbar>
  <the-services></the-services>
  <main-page></main-page>
  <the-footer></the-footer>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import MainPage from "@/pages/MainPage";
import TheFooter from "@/components/TheFooter";
import TheServices from "@/components/TheServices";
export default {
  name: 'App',
  components: {
    TheNavbar,
    MainPage,
    TheFooter,
    TheServices,
  }
}
</script>

<style>

</style>
