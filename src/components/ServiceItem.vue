<template>
  <div class="card rounded-pill border-5 ms-5 mt-5">
    <img :src="img" class="card-img-top" style="transform: scale(1.1)" alt="">
    <div class="card-body text-light">
      <h5 class="card-title">{{ name }}</h5>
<!--      <p class="card-text">{{ description }}</p>-->
    </div>
    <the-service-item-button>Rohkem infot</the-service-item-button>
  </div>
</template>

<script>
import TheServiceItemButton from "@/components/TheServiceItemButton";

export default {
  name: "ServiceItem",
  props: ['img', 'description', 'name'],
  components: {
    TheServiceItemButton
  }

}
</script>

<style scoped>

.card.rounded-pill {
  background-color: #f36f36;
}
</style>