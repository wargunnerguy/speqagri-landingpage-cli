<template>
  <service-item v-for="service in this.$store.state.services" :key="service.name" :img="service.img">{{ $t(service.name) }}</service-item>
</template>

<script>

import ServiceItem from "@/components/ServiceItem";

export default {
  name: "TheServices",
  components: {
    ServiceItem
  },
}
</script>

<style scoped>

</style>