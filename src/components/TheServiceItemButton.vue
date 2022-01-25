<template>
  <ul class="list-group list-group-flush border-0 pb-5">
    <li class="list-group-item bg-transparent">
      <div href="#" class="btn btn-warning">
        <slot></slot>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheServiceItemButton"
}
</script>

<style scoped>
.btn {
  text-transform: uppercase;
}
</style>