<template>
  <section class="wrapper">
    <!-- row-t title -->
    <div class="row-t title">
      <ul>
        <li style="width: 35%">{{ $t("message.calc_product") }}</li>
        <li style="width: 17%">{{ $t("message.calc_price") }}</li>
        <li style="width: 17%">{{ $t("message.calc_tax") }} 20%</li>
        <li style="width: 17%">{{ $t("message.calc_price_and_tax") }}</li>
        <li style="width: 14%">{{ $t("message.calc_select") }}</li>
      </ul>
    </div>
    <!-- row-t 3 -->
    <article v-for="product in products" :key="product.id" class="row-t" :class="product.type">
      <ul>
        <label :for="'product_' + product.id">
          <li style="width: 35%"><a href="#">{{ productFullName(product) }}</a></li>
          <li style="width: 17%">{{ product.hindIlmaKm }} €/t</li>
          <li style="width: 17%">{{ calcTax(product.hindIlmaKm, 2) }} €/t</li>
          <li style="width: 17%">{{ calcTotal(product.hindIlmaKm, 2) }} €/t</li>
          <input :id="'product_' + product.id" type="radio" :name="product.name" v-model="selectedProductId"
                 :value="product.id">
        </label>
      </ul>
      <ul class="more-content">
        <li>{{ product.lisainfo !== '' ? product.lisainfo : '' }}</li>
      </ul>
    </article>

    <article>
      <div class="hero-unit" style="background-color: black">
        <h3 v-if="!selectedProductId"> Vali tabelist toode, mille hinda soovid teada</h3>
        <div v-else>
          <h3>{{ products.find(product => product.id === selectedProductId).asukoht }} -
            {{ products.find(product => product.id === selectedProductId).fraktsioon.toLowerCase() }} - ligikaudne
            hind: </h3>
          <div class="row-fluid">
            <div class="span3">Kogus (min 5t)</div>
            <div class="span6">
              <input type="range" min="5" max="200" step="0.1" class="slider" v-model="selectedAmount">
            </div>
            <div class="span1 input-append">
              <input style="width: 3.5em" id="appendedInput" type="number" v-model="selectedAmount">
              <span class="add-on">tonni</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span3">Kaugus karjäärist</div>
            <div class="span6">
              <input type="range" min="0" max="200" step="0.1" class="slider" v-model="selectedDistance">
            </div>
            <div class="span1 input-append">
              <input style="width: 3.5em" type="number" v-model="selectedDistance">
              <span class="add-on">km</span>
            </div>
          </div>
          <hr>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Materjalihind</span>
              <input class="span6" readonly type="number" v-model="totalProductPrice">
              <span class="add-on">€</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Transpordihind</span>
              <input class="span6" readonly type="number"
                     v-model="totalTransportPrice">
              <span class="add-on">€</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Käibemaks kokku</span>
              <input class="span6" readonly type="number" v-model="totalTaxPrice">
              <span class="add-on">€</span>
            </div>
          </div>
          <div class="row-fluid">
            <div class="span8"></div>
            <div class="span4 input-prepend input-append">
              <span class="span6 add-on">Hind kokku</span>
              <input class="span6" readonly type="number" v-model="totalPrice">
              <span class="add-on">€</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "TheCalculator",
  data() {
    return {
      karjaarid: "json_file",
      selectedAmount: 5,
      selectedDistance: 20,
      transportStartPrice: 50,
      transportKmPrice: 2,
      k2ibemaks: 0.2,
      totalProductPrice: 0.0,
      products: [
        {
          id: "1",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "2",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/45",
          hindIlmaKm: "3.8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "3",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "4",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/63",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "5",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 8/16",
          hindIlmaKm: "7.8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "6",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 16/32",
          hindIlmaKm: "7.4",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "7",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 32/64",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "8",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/500",
          hindIlmaKm: "4.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "9",
          ettevote: "OÜ Väo Paas",
          asukoht: "Koigi karjäär",
          fraktsioon: "Killustik fr 0/8",
          hindIlmaKm: "2.4",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "10",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/12",
          hindIlmaKm: "10",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "11",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/16",
          hindIlmaKm: "10",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "12",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 8/16",
          hindIlmaKm: "10",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "13",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/32",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "14",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/63",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "15",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 16/32",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "16",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 32/63",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "17",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 0/63",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "18",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "19",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "20",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/16 III klass",
          hindIlmaKm: "10.5",
          lisainfo: "Purunemiskindlusega LA≤30",
          type: "killustik"
        },
        {
          id: "21",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 16/32 III klass",
          hindIlmaKm: "8",
          lisainfo: "Purunemiskindlusega LA≤31",
          type: "killustik"
        },
        {
          id: "22",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 32/63 III klass",
          hindIlmaKm: "8",
          lisainfo: "Purunemiskindlusega LA≤32",
          type: "killustik"
        },
        {
          id: "23",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/32 III klass",
          hindIlmaKm: "9",
          lisainfo: "Purunemiskindlusega LA≤33",
          type: "killustik"
        },
        {
          id: "24",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Killustik fr 4/63 III klass",
          hindIlmaKm: "9",
          lisainfo: "Purunemiskindlusega LA≤34",
          type: "killustik"
        },
        {
          id: "26",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Sõelmed fr 0/4",
          hindIlmaKm: "2",
          lisainfo: "",
          type: "soelmed"
        },
        {
          id: "27",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Sõelutud kivi fr 0/32",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "28",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Sõelutud kivi fr 8/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "29",
          ettevote: "Eesti Killustik OÜ",
          asukoht: "Rõstla paekarjäär",
          fraktsioon: "Lõhatud paekivi",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "lohatud"
        },
        {
          id: "30",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Kruusasõelmed fr 0/4",
          hindIlmaKm: "5",
          lisainfo: "",
          type: "soelmed"
        },
        {
          id: "31",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Kruuskillustik fr 4/8",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "kruuskillustik"
        },
        {
          id: "32",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Kruuskillustik fr 8/12",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "kruuskillustik"
        },
        {
          id: "33",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Purustatud kruus fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "34",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Purustatud kruus fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "35",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Täiteliiv",
          hindIlmaKm: "3",
          lisainfo: "",
          type: "liiv"
        },
        {
          id: "36",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Seguliiv",
          hindIlmaKm: "3.5",
          lisainfo: "",
          type: "liiv"
        },
        {
          id: "37",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Sõelutud liiv fr 0/2",
          hindIlmaKm: "5",
          lisainfo: "",
          type: "liiv"
        },
        {
          id: "38",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Looduslik kruus",
          hindIlmaKm: "4",
          lisainfo: "",
          type: "kruus"
        },
        {
          id: "39",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/4",
          hindIlmaKm: "3.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "40",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 4/8",
          hindIlmaKm: "9",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "41",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 4/16",
          hindIlmaKm: "9",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "42",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 8/16",
          hindIlmaKm: "9",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "43",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 16/32",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "44",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 4/32",
          hindIlmaKm: "8.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "45",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 32/63",
          hindIlmaKm: "8",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "46",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "47",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/32",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "48",
          ettevote: "OÜ Moreen",
          asukoht: "Siimusti karjäär",
          fraktsioon: "Lubjakivikillustik fr 0/63",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "49",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/4",
          hindIlmaKm: "2.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "50",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/8",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "51",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "52",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 8/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "53",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 16/32",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "54",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/32",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "55",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 32/63",
          hindIlmaKm: "6.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "56",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/16",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "57",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/32",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "58",
          ettevote: "OÜ Moreen",
          asukoht: "Sopimetsa II lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/63",
          hindIlmaKm: "5.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "59",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/6",
          hindIlmaKm: "3",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "60",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 4/12",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "61",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 8/16",
          hindIlmaKm: "7.5",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "62",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 16/32",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "63",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 32/63",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "64",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/32",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "65",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/63",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "66",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lubjakivikillustik fr 0/16",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "killustik"
        },
        {
          id: "67",
          ettevote: "Luige Kivi OÜ",
          asukoht: "Sopimetsa lubjakivikarjäär",
          fraktsioon: "Lõhatud paekivi",
          hindIlmaKm: "6",
          lisainfo: "",
          type: "lohatud"
        },
        {
          id: "68",
          ettevote: "Sopimetsa",
          asukoht: "Sopimetsa",
          fraktsioon: "Sõelutud muld",
          hindIlmaKm: "7",
          lisainfo: "",
          type: "muld"
        }
      ],
    }
  },
  computed: {
    totalPrice() {
      return parseFloat(parseFloat(this.totalProductPrice) + parseFloat(this.totalTransportPrice) + parseFloat(this.totalTaxPrice)).toFixed(2);
    },
    selectedProductId() {
      const productObj = this.products.find(prod => prod.id === this.selectedProductId);
      return parseFloat(this.selectedAmount * productObj.hindIlmaKm).toFixed(2);
    },
    totalTransportPrice() {

      return parseFloat(this.selectedDistance * this.transportKmPrice).toFixed(2);
    },
    totalTaxPrice() {
      return parseFloat(this.totalTransportPrice * this.k2ibemaks + this.totalProductPrice * this.k2ibemaks).toFixed(2);
    },
  },
  methods: {
    calcTax(price, round) {
      return parseFloat(price * this.k2ibemaks).toFixed(round);
    },
    calcTotal(price, round) {
      return parseFloat(price * (1 + this.k2ibemaks)).toFixed(round);
    },
    productFullName(product) {
      return product.fraktsioon;
    },
  },
}
</script>

<style scoped lang="scss">
/* Google fonts - Open Sans */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700);

/* colors */
$blue: rgba(79, 192, 210, 1);
$green: rgb(27, 172, 145);
$yellow: rgba(231, 196, 104, 0.7);
$orange: rgba(235, 118, 85, 1);
$dark-bg: rgba(30, 30, 30, 0.9);
$light-bg: rgba(255, 255, 255, 0.1);
$text: rgba(255, 255, 255, 0.9);


/* links */
.nfl a, .mlb a, .nhl a, .pga a {
  text-decoration: none;
  transition: color 0.2s ease-out;
}

.nfl a {
  color: $blue;
}

.nfl a:hover {
  color: darken($blue, 20%);
}

.mlb a {
  color: $green;
}

.mlb a:hover {
  color: darken($green, 20%);
}

.nhl a {
  color: $yellow;
}

.nhl a:hover {
  color: darken($yellow, 20%);
}

.pga a {
  color: $orange;
}

.pga a:hover {
  color: darken($orange, 20%);
}

/* wrapper */
.wrapper {
  width: 100%;
  //max-width:1000px;
  margin: 0 auto 0 auto;
  padding: 0;
  background: $dark-bg;
  color: $text;
  overflow: hidden;
  position: relative;
}

/* lists */
.row-t ul {
  margin: 0;
  padding: 0;
}

.row-t ul li {
  margin: 0;
  font-size: 16px;
  font-weight: normal;
  list-style: none;
  display: inline-block;
  width: 20%;
  box-sizing: border-box;
  @media only screen and (max-width: 767px) and (min-width: 480px) {
    font-size: 13px;
  }
  @media only screen and (max-width: 479px) {
    font-size: 13px;
  }
}

.title ul li {
  padding: 15px 13px;
  font-weight: bold;
}

.row-t ul li {
  padding: 5px 10px;
  color: $text;
}

/* rows */
.row-t {
  padding: 20px 0;
  height: 30px;
  font-size: 0;
  position: relative;
  overflow: hidden;
  transition: all 0.2s ease-out;
  border-top: 1px solid darken($light-bg, 100%);
}

.row-t:hover {
  background-color: lighten($dark-bg, 10%);
  height: 65px;
  @media only screen and (max-width: 767px) {
    height: 85px;
  }
  @media only screen and (max-width: 359px) {
    height: 105px;
  }
}

.title {
  padding: 25px 0 5px 0;
  height: 45px;
  font-size: 0;
  background-color: $dark-bg;
  border-left: 3px solid lighten($dark-bg, 100%);
}

.title:hover {
  height: 45px;
  background-color: $dark-bg;
  border-left: 3px solid lighten($dark-bg, 100%);
}

.title-hide {
  @media only screen and (max-width: 767px) {
    display: none;
  }
}

.nfl {
  border-left: 3px solid darken($blue, 30%);
}

.nfl:hover {
  border-left: 3px solid $blue;
}

.mlb {
  border-left: 3px solid darken($green, 30%);
}

.mlb:hover {
  border-left: 3px solid $green;
}

.nhl {
  border-left: 3px solid darken($yellow, 30%)
}

.nhl:hover {
  border-left: 3px solid $yellow;
}

.pga {
  border-left: 3px solid darken($orange, 30%);
}

.pga:hover {
  border-left: 3px solid $orange;
}

/* row-t one - fadeIn */
.row-fadeIn-wrapper {
  opacity: 0;
  font-size: 0;
  height: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-out;
  animation: fadeIn 0.4s ease-out 2s 1 alternate;
  animation-fill-mode: forwards;
}

.row-fadeIn-wrapper:hover {
  height: 35px;
  @media only screen and (max-width: 767px) {
    height: 55px;
  }
  @media only screen and (max-width: 359px) {
    height: 75px;
  }
}

.fadeIn {
  padding: 20px 0;
  font-size: 0;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.fadeIn:hover {
  background-color: lighten($dark-bg, 10%);
}

/* row-t two - fadeOut */
.row-fadeOut-wrapper {
  font-size: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.2s ease-out;
  animation: fadeOut 0.4s ease-out 8s 1 alternate;
  animation-fill-mode: forwards;
  opacity: 1;
  height: 65px;
}

.row-fadeOut-wrapper:hover {
  height: 100px;
}

/* update content */
.update-row-t {
  animation: update 0.5s ease-out 12s 1 alternate;
}

.update1 {
  position: absolute;
  top: 25px;
  display: inline-block;
  opacity: 1;
  animation: update1 1s ease-out 12s 1 alternate;
  animation-fill-mode: forwards;
}

.update2 {
  position: absolute;
  top: 25px;
  display: inline-block;
  opacity: 0;
  animation: update2 4s ease-out 13s 1 alternate;
  animation-fill-mode: forwards;
}

/* more content */
ul.more-content li {
  position: relative;
  top: 8px;
  font-size: 13px;
  margin: 0;
  padding: 10px 13px;
  display: block;
  height: 50px;
  width: 100%;
  color: darken($text, 50%);
  @media only screen and (max-width: 767px) {
    font-size: 11px;
  }
}

/* small content */
.small {
  color: darken($text, 60%);
  font-size: 10px;
  padding: 0 10px;
  margin: 0;
  @media only screen and (max-width: 767px) {
    display: none;
  }
}

/* keyframe animations */
@keyframes fadeIn {
  from {
    background: $light-bg;
    opacity: 0;
    padding: 0;
  }
  to {
    background: darken($light-bg, 80%);
    opacity: 1;
    padding: 0 0 65px 0;
  }
}

@keyframes fadeOut {
  from {
    background: darken($light-bg, 80%);
    opacity: 1;
    height: 65px;
  }
  to {
    background: $light-bg;
    opacity: 0;
    height: 0;
  }
}

@keyframes update {
  0% {
    background: darken($light-bg, 80%);
  }
  50% {
    background: $light-bg;
  }
  100% {
    background: darken($light-bg, 80%);
  }
}

@keyframes update1 {
  0% {
    opacity: 0;
  }
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes update2 {
  0% {
    opacity: 0;
    color: $text;
  }
  20% {
    opacity: 1;
    color: $green;
  }
  100% {
    opacity: 1;
    color: $text;
  }
}

.slidecontainer {
  width: 100%; /* Width of the outside container */
}

/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none; /* Override default look */
  appearance: none;
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #1bac91; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
  width: 25px; /* Set a specific slider handle width */
  height: 25px; /* Slider handle height */
  background: #1bac91; /* Green background */
  cursor: pointer; /* Cursor on hover */
}

.add-on {
  color: $dark-bg;
  font-weight: bold !important;
  background-color: #1bac91 !important;
}

select, textarea, input[type="text"], input[type="password"], input[type="datetime"], input[type="datetime-local"], input[type="date"], input[type="month"], input[type="time"], input[type="week"], input[type="number"], input[type="email"], input[type="url"], input[type="search"], input[type="tel"], input[type="color"], .uneditable-input {
  font-size: 22px;
  font-weight: bold;
}


</style>












