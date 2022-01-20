<template>
  <section class="our-facts">
    <div class="container">
        <div class="section-heading">
          <h2>{{ $t('machinery') }}</h2>
        </div>
      <div class="row row-cols-2">
        <machine-item type="video" media-name='traktor_360p_preview.mp4'>JCB 3CX</machine-item>
        <machine-item type="video" media-name='newholland_t500_preview_360p.mp4'>New Holland T5.105</machine-item>
        <machine-item type="image" media-name='CaterpillarCR308_720_3.jpg' media-tiny-name="CaterpillarCR308_tiny.jpg">Caterpillar CR308</machine-item>
        <machine-item type="image" media-name='LSPN4003_720_3.jpg' media-tiny-name="LSPN4003_tiny.jpg">Volvo FH12, {{ $t("attached_plow") }}</machine-item>
        <machine-item type="image" media-name='Manitou_720_3.png' media-tiny-name="Manitou_720_tiny.png">Manitou</machine-item>
        <machine-item type="image" media-name='NewHollandT500_3.jpg' media-tiny-name="NewHollandT500_tiny.jpg">New Holland T5.105</machine-item>
        <machine-item type="video" media-name='kallur.mp4'>Volvo FH F.X Meiller</machine-item>
        <machine-item type="image" media-name='RenaultMidlum_720_3.jpg' media-tiny-name="RenaultMidlum_tiny.jpg">Renault Midlum {{ $t("tanker") }}</machine-item>
        <machine-item type="image" media-name='Volvo_tilted_720_3.jpg' media-tiny-name="Volvo_tilted_tiny.jpg">Volvo FH12</machine-item>
        <machine-item type="image" media-name='VolvoFM12_720_3.jpg' media-tiny-name="VolvoFM12_tiny.jpg">Volvo FM12, {{ $t("multilift") }}</machine-item>
        <machine-item type="image" media-name='VolvoFM12_CAT308_720_3.jpg' media-tiny-name="VolvoFM12_CAT308_tiny.jpg">Volvo FM12, {{ $t("multilift") }}        </machine-item>
        <machine-item type="image" media-name='VOLVOH12_720_3.jpg' media-tiny-name="VOLVOH12_tiny.jpg">Volvo FH12</machine-item>
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