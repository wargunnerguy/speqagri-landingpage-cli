<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="nav">
    <div class="container">
      <a class="navbar-brand" href="#">SPEQ Agri</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav m-auto text-uppercase fw-bolder">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
               aria-expanded="false">
              {{ $t('Services') }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li v-for="service in services" :key="service.id"><a class="dropdown-item"
                                                                   href="#">{{ $t(service.translation_tag) }}</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" href="#" tabindex="-1" aria-disabled="true" to="/calc">
              {{ $t('calculator') }}
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" :to="{name: 'Jobs'}">{{ $t('job_vacancies') }} <span
                class="badge bg-danger">0</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/#contact">{{ $t('contact') }}</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li>
            <the-locale-changer></the-locale-changer>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import TheLocaleChanger from "@/components/TheLocaleChanger";
import {mapGetters} from "vuex";

export default {
  name: "TheNavbar",
  components: {
    TheLocaleChanger
  },
  computed: {
    ...mapGetters(['services'])
  }

}
</script>

<style lang="scss" scoped>

</style>