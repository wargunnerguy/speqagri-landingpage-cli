<template>
  <the-navbar></the-navbar>
  <router-view>
  </router-view>
  <the-footer></the-footer>
</template>
<script>
import TheNavbar from "@/components/TheNavbar";
import TheFooter from "@/components/TheFooter";

export default {
  name: "App",
  components: {
    TheNavbar,
    TheFooter,
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
