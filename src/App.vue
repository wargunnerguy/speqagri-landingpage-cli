<template>
  <the-navbar></the-navbar>
  <main-page></main-page>
  <the-footer></the-footer>
</template>

<script>
import TheNavbar from "@/components/TheNavbar";
import MainPage from "@/pages/MainPage";
import TheFooter from "@/components/TheFooter";
export default {
  name: 'App',
  components: {
    TheNavbar,
    MainPage,
    TheFooter
  }
}
</script>

<style>

</style>
