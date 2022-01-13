<template>
  <div class="card" style="width: 18rem;">
    <img :src="img" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">{{ description }}</p>
      <a href="#" class="btn btn-primary">VAATA</a>
    </div>
  </div>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "ServiceItem",
  props: ['img', 'description', 'name'],

}
</script>

<style scoped>

</style>