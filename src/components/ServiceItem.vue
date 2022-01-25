<template>
  <div class="card ms-5 mt-5 mb-5" :class="{'selectedServiceBg': showDetails}">
    <img :src="img" class="card-img-top" alt="">
    <div class="card-body text-light">
      <h5 v-if="!showDetails" class="card-title">{{ name }}</h5>
      <div v-if="showDetails" class="card-text">{{ description }}</div>
    </div>
    <the-service-item-button @click="toggleDetails">{{ moreInfo }}</the-service-item-button>
  </div>
</template>

<script>
import TheServiceItemButton from "@/components/TheServiceItemButton";

export default {
  name: "ServiceItem",
  props: ['img', 'description', 'name'],
  components: {
    TheServiceItemButton
  },
  data() {
    return {
      showDetails: false,
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    }
  },
  computed: {
    moreInfo() {
      return this.showDetails ? 'Peida' : 'Täpsemalt';
    }
  }

}
</script>

<style scoped>

.card {
  background-color: #f36f36;
  border-radius: 10px;
  border: dashed #bb562a 3px;
}
img {
  transform: scale(1.1);
}

p {
  font-size: 1.2rem;
}
.selectedServiceBg {
  background-color: #bb562a;
}
</style>