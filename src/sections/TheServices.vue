<template>
  <div class="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-0">
      <service-item v-for="service in this.$store.state.services"
                    :key="service.id"
                    :img="require(`@/assets/img/icons/${service.img}.png`)"
                    :name=$t(service.translation_tag)
                    :description=$t(service.desc)
      ></service-item>
  </div>
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