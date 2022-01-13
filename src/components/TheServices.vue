<template>
  <service-item v-for="service in this.$store.state.services"
                :key="service.id"
                :img="require(`@/assets/img/icons/${service.img}.png`)"
                :name=$t(service.translation_tag)
                :description=$t(service.desc)
  ></service-item>
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