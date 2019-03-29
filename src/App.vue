<template>
  <div>
    <div class="float_bg_1">
      <img class="fakeImg" src="https://via.placeholder.com/435x650">
    </div>
    <div class="float_bg_2">
      <img class="fakeImg" src="https://via.placeholder.com/450x453">
    </div>

    <main>
      <div class="page_center">
        <div class="planet layout_flex" :class="{loading: isLoading}">
          <sw-header title="Star Wars - Planets guide"/>

          <div class="content_planet" v-for="item in planet" :key="item.id">
            <sw-planetInfo
              :name="item.name"
              :rotation_period="item.rotation_period"
              :orbital_period="item.orbital_period"
              :diameter="item.diameter"
              :climate="item.climate"
              :gravity="item.gravity"
              :terrain="item.terrain"
              :surface_water="item.surface_water"
              :population="item.population"
              :residents="item.residents"
              :films="item.films"
            />
            <sw-btn rotulo="proximo" @btnClick="nextTo()" estiloDoBotao="next"/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Btn from "./components/btn/Btn.vue";
import PlanetInfo from "./components/planetInfo/PlanetInfo.vue";
import Header from "./components/header/Header.vue";

export default {
  metaInfo: {
    title: "Star Wars - B2W Test",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  data() {
    return {
      planet: [],
      link: "https://swapi.co/api/planets",
      isLoading: true,
      numberPages: null
    };
  },
  components: {
    "sw-btn": Btn,
    "sw-planetInfo": PlanetInfo,
    "sw-header": Header
  },
  methods: {
    getRadomPlante: function(ramdomPage) {
      this.isLoading = true;
      this.$http
        .get(this.link + "/?page=" + ramdomPage)
        .then(res => res.json())
        .then(
          planet => {
            let numberItems = planet.results.length;
            let ramdomItem = Math.floor(Math.random() * numberItems);

            this.planet = planet.results.slice(ramdomItem, ramdomItem + 1);
            this.isLoading = false;
            console.log("numero: ", this.planet[0].url);
          },
          err => console.log(err)
        );
    },
    nextTo: function() {
      this.isLoading = true;

      this.$http
        .get(this.link)
        .then(res => res.json())
        .then(
          planet => {
            let pageNumber = planet.count / planet.results.length;
            let ramdomPage = Math.floor(Math.random() * pageNumber + 1);
            this.getRadomPlante(ramdomPage);
            console.log("pagina: ", ramdomPage);
          },
          err => console.log(err)
        );
    }
  },
  created() {
    this.isLoading = true;

    this.$http
      .get(this.link)
      .then(res => res.json())
      .then(
        planet => {
          let pageNumber = planet.count / planet.results.length;
          let ramdomPage = Math.floor(Math.random() * pageNumber + 1);
          this.getRadomPlante(ramdomPage);
          console.log("pagina: ", ramdomPage);
        },
        err => console.log(err)
      );
  }
};
</script>

<style lang="scss">
@import "./css/all.scss";
@import "./css/index.scss";
</style>