<template>
  <section class="our-facts">
    <div class="container">
      <div class="row row-cols-2">
        <machine-item img-name='CaterpillarCR308_720_3.jpg' img-tiny-name="CaterpillarCR308_tiny.jpg">Caterpillar CR308</machine-item>
        <machine-item img-name='LSPN4003_720_3.jpg' img-tiny-name="LSPN4003_tiny.jpg"></machine-item>
        <machine-item img-name='Manitou_720_3.png' img-tiny-name="Manitou_720_tiny.png"></machine-item>
        <machine-item img-name='NewHollandT500_3.jpg' img-tiny-name="NewHollandT500_tiny.jpg">New Holland T5.105</machine-item>
        <machine-item img-name='RenaultMidlum_720_3.jpg' img-tiny-name="RenaultMidlum_tiny.jpg"></machine-item>
        <machine-item img-name='Volvo_tilted_720_3.jpg' img-tiny-name="Volvo_tilted_tiny.jpg"></machine-item>
        <machine-item img-name='VolvoFH.png' img-tiny-name="VolvoFH_tiny.png"></machine-item>
        <machine-item img-name='VolvoFM12_720_3.jpg' img-tiny-name="VolvoFM12_tiny.jpg"></machine-item>
        <machine-item img-name='VolvoFM12_CAT308_720_3.jpg' img-tiny-name="VolvoFM12_CAT308_tiny.jpg">Volvo FM12, {{ $t("multilift") }}</machine-item>
        <machine-item img-name='VOLVOH12_720_3.jpg' img-tiny-name="VOLVOH12_tiny.jpg"></machine-item>
      </div>
    </div>
  </section>
</template>

<script>
import MachineItem from "@/components/MachineItem";

export default {
  name: "TheMachines",
  components: {
    MachineItem
  }
}
</script>

<style scoped>

</style>