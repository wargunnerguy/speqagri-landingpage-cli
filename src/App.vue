<template>
  <the-navbar></the-navbar>
  <router-view>
  </router-view>
  <the-footer></the-footer>
</template>
<script>

import TheNavbar from "@/sections/TheNavbar";
import TheFooter from "@/sections/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  },
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f36f36;

  h2 {
    font-size: 35px;
    font-weight: inherit;
    border: none;
  }

}
</style>
