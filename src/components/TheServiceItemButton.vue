<template>
  <ul class="list-group list-group-flush border-0 pb-5">
    <li class="list-group-item bg-transparent">
      <a href="#" class="btn btn-danger">
        <slot></slot>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "TheServiceItemButton"
}
</script>

<style scoped>

</style>