<template>
  <div class="overlay-container g-4">
    <div class="card bg-transparent border-0">
      <img class="img-fluid image" v-lazy="{
        src: require(`@/assets/img/masinad/${imgName}`),
        loading: require(`@/assets/img/masinad/${imgTinyName}`),
        error: ''}"/>
      <div class="overlay">
        <slot>MASINA NIMI PUUDU</slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MachineItem",
  props: ['title', 'imgName', 'imgTinyName'],
}
</script>

<style scoped>
.overlay-container {
  position: relative;
}

/* The overlay effect - lays on top of the container and over the image */
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.7); /* Black see-through */
  width: 100%;
  padding: 15px;
  transition: .5s ease;
  opacity: 0;
  color: white;
  font-size: 20px;
  text-align: center;
  box-sizing: border-box;
}


.overlay-container:hover .overlay {
  opacity: 1;
}

.image {
  border-radius: 15px;
  display: block;
  width: 100%;
  height: auto;
  box-shadow: 5px 5px 10px rgba(34, 34, 34, 0.85);
}

.overlay {
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
}

</style>