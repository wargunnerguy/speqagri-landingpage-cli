<template>
  <section class="container pt-5"></section>
  <section class="container main pt-4 pb-2">
    <div class="card bg-green-custom">
      <img v-if="img_link && mediaTinyName" class="card-img-top img-fluid p-3" v-lazy="{
        src: require(`@/assets/${img_link}`),
        loading: require(`@/assets/${mediaTinyName}`),
        error: ''}"/>
      <img v-else class="card-img-top img-fluid p-3" :src="require(`@/assets/${img_link}`)" alt="">
      <div class="card-body">
        <slot></slot>
      </div>
      <base-button link="/" class="bg-green-light-custom text-light">{{ $t('to_homepage') }}</base-button>
    </div>
  </section>
  <work-area></work-area>
</template>

<script>
import WorkArea from "@/sections/WorkArea";

export default {
  props: ['img_link', 'mediaTinyName'],
  name: "BasePoster",
  components: {
    WorkArea,
  }
}
</script>

