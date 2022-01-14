<template>
    <div class='box'>
      <ul>
        <li v-for="service in this.$store.state.services" :key="service.id">{{ $t(service.translation_tag) }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "TheTextScrollerGadget"
}
</script>

<style lang="scss" scoped>
html {
  height: 100%;
}

body {
  height: 100%;
  display: flex;

}

// Varaibles
$item-count: 12;
$item: 1 / $item-count;

.box {
  height: 80px;
  margin: auto;
  overflow: hidden;
  position: relative;
  background-color: #2a2a2a;
  color: lightgrey;
  &::before {
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    content: '';
    height: 10px;
    position: absolute;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.2), rgba(101, 91, 91, 0));
  }
  &::after {
    left: 0;
    bottom: 0;
    z-index: 1;
    width: 100%;
    content: '';
    height: 10px;
    position: absolute;
    background: linear-gradient(180deg, rgba(101, 91, 91, 0), rgba(255, 255, 255, 0.2));
  }
}

ul {
  margin: 0;
  padding: 0;
  animation: scrollUp 6s 1s infinite alternate;
  li {
    opacity: 1;
    list-style: none;
    font-size: 50px;
    letter-spacing: .02em;
    text-transform: uppercase;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes scrollUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY((-100% / $item-count) * ($item-count - 1));
  }
}</style>