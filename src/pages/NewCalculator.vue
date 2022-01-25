<template>
  <base-section>

    <table class="container">
      <thead>
      <tr>
        <th><h1>{{ $t("calc_product") }}</h1></th>
        <th><h1>{{ $t("calc_price") }}</h1></th>
        <th><h1>{{ $t("calc_tax") }} 20%</h1></th>
        <th><h1>{{ $t("calc_price_and_tax") }}</h1></th>
        <th><h1>{{ $t("calc_select") }}</h1></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id" :class="product.type">
          <td>{{ productFullName(product) }}</td>
          <td>{{ product.hindIlmaKm }} €/t</td>
          <td>{{ calcTax(product.hindIlmaKm, 2) }} €/t</td>
          <td>{{ calcTotal(product.hindIlmaKm, 2) }} €/t</td>
          <td><input :id="'product_' + product.id" type="radio" :name="product.name" v-model="selectedProductId"
                 :value="product.id"></td>
      </tr>
      </tbody>
    </table>
  </base-section>
</template>

<script>
import BaseSection from "@/layout/BaseSection";

export default {
  name: "NewCalculator",
  components: { BaseSection},
  data() {
    return {
      selectedAmount: 5,
      selectedDistance: 20,
      transportStartPrice: 50,
      transportKmPrice: 2,
      k2ibemaks: 0.2,
      selectedProductId: null,
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
    totalProductPrice() {
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

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,700);

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  line-height: 1.42em;
  color: #A7A1AE;
  background-color: #1F2739;
}

h1 {
  font-size: 3em;
  font-weight: 300;
  line-height: 1em;
  text-align: center;
  color: #e5e5e5;
}

h2 {
  font-size: 1em;
  font-weight: 300;
  text-align: center;
  display: block;
  line-height: 1em;
  padding-bottom: 2em;
  color: #FB667A;
}

h2 a {
  font-weight: 700;
  text-transform: uppercase;
  color: #FB667A;
  text-decoration: none;
}

.blue {
  color: #d0d0d0;
}

.orange {
  color: #f36f36;
}

.container th h1 {
  font-weight: bold;
  font-size: 1em;
  text-align: left;
  color: #d7d7d7;
}

.container td {
  font-size: 1em;
  -webkit-box-shadow: 0 2px 2px -2px #0E1119;
  -moz-box-shadow: 0 2px 2px -2px #0E1119;
  box-shadow: 0 2px 2px -2px #0E1119;
}

.container {
  text-align: left;
  overflow: hidden;
  width: 80%;
  margin: 0 auto;
  display: table;
  padding: 0 0 8em 0;
}

.container td, .container th {
  padding-bottom: 2%;
  padding-top: 2%;
  padding-left: 2%;
}

/* Background-color of the odd rows */
.container tr:nth-child(odd) {
  background-color: #323C50;
}

/* Background-color of the even rows */
.container tr:nth-child(even) {
  background-color: #2C3446;
}

.container th {
  background-color: #1F2739;
}

.container tr {
  color: #f36f36;
}

.container tr:hover {
  background-color: #f36f36;
  color: #422f10;
  box-shadow: #422f10 -1px 1px, #422f10 -2px 2px, #422f10 -3px 3px, #422f10 -4px 4px, #422f10 -5px 5px, #422f10 -6px 6px;
  transform: translate3d(6px, -6px, 0);

  transition-delay: 0s;
  transition-duration: 0.4s;
  transition-property: all;
  transition-timing-function: linear;
  font-weight: bold;
}

@media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) {
    display: none;
  }
}
</style>