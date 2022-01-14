<template>
  <div id="job_vacancies_box" class="card section">
    <h4>{{$t("we_offer_work_to")}}{{$t("to_fecal_truck_driver")}}</h4>
    <div class="row">
      <div class="col-3">
        <div class="card-img-top">
          <!--                    <span class="notify-badge">{{$t("new")}}</span>-->
          <!--                    <span class="badge badge-success notify-badge-active">{{$t("active")}}</span>-->
          <picture>
            <source srcset="/assets/img/job_offer_thumbnails/autojuht_360.png" type="image/png">
            <img src="assets/img/masinad/machine_alt.jpg" alt="Pilt puudu!">
          </picture>
        </div>
      </div>
      <div class="card-body col-8">
        <div class="row">
          <div class="col-4">
            <h5>{{$t("requirements_for_candidate")}}</h5>
            <ul class="list-group-flush">
              <li>{{$t("cat_corresponding_to_job_offer")}}</li>
              <li>{{$t("proficiency_est")}}</li>
              <li>{{$t("correctness_responsibility_accuracy")}}</li>
            </ul>
          </div>
          <div class="col-3">
            <h5>{{$t("we_offer")}}</h5>
            <ul class="list-group-flush">
              <li>{{$t("competitive_salary")}}</li>
              <li>{{$t("fun_team")}}</li>
              <li>{{$t("fuel_compensation")}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="col-3">
      </div>
      <div class="col-6">
        <h5>{{$t("job_offer_info")}}</h5>
        <div class="fb-share-button" data-href="https://speqagri.ee/autojuht.html" data-layout="button_count" data-size="large">
          <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fspeqagri.ee%2Fautojuht.html&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore" >Jaga
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JobOffers"
}
</script>

<style scoped>

</style>