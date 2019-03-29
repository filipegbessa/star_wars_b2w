<template>
  <div class="sw-planet_info">
    <h1>
      <v-icon>public</v-icon>
      {{ name }}
    </h1>
    <ul>
      <li>
        <strong>Período de rotação:</strong>
        {{ rotation_period }}
      </li>
      <li>
        <strong>Orbitais Período:</strong>
        {{ orbital_period }}
      </li>
      <li>
        <strong>Diâmetro:</strong>
        {{ diameter }}
      </li>
      <li>
        <strong>Clima:</strong>
        {{ climate }}
      </li>
      <li>
        <strong>Gravidade:</strong>
        {{ gravity }}
      </li>
      <li>
        <strong>Terreno:</strong>
        {{ terrain }}
      </li>
      <li>
        <strong>Água da superfície:</strong>
        {{ surface_water }}
      </li>
      <li>
        <strong>População:</strong>
        {{ population }}
      </li>
      <li v-if="allFilms">
        <strong>Filmes:</strong>
        <div class="movies layout_flex">
          <div v-for="item in allFilms" :key="item.id" :class="item">
            <img class="fakeImg" src="https://via.placeholder.com/120x200">
          </div>
        </div>
        <small v-if="moreFilms">E em +{{moreFilms}} {{pt_films}}</small>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newFilms: [],
      moreFilms: null,
      pt_films: "",
      arrayFilms: []
    };
  },
  methods: {
    replaceName(count) {
      this.arrayFilms = [];

      for (let i = 0; i < count; i++) {
        let nameClass = this.films[i];
        nameClass = nameClass
          .replace("https://swapi.co/api/films/", "mov_")
          .replace("/", "");
        this.arrayFilms = this.arrayFilms.concat(nameClass);
      }
    }
  },
  computed: {
    allFilms: function() {
      this.moreFilms = null;
      let countFilms = this.films.length;

      if (countFilms !== 0 && countFilms <= 3) {
        countFilms = this.films.length;
      } else if (countFilms === 0) {
        countFilms = [];
      } else {
        countFilms = 3;
      }

      this.replaceName(countFilms);

      if (this.films.length === 4) {
        this.moreFilms = this.films.length - 3;
        this.pt_films = "filme";
      } else if (this.films.length !== 0 && this.films.length > 3) {
        this.moreFilms = this.films.length - 3;
        this.pt_films = "filmes";
      }

      if (this.films.length !== 0) {
        return this.arrayFilms;
      }
    }
  },
  props: {
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    population: String,
    residents: Array,
    films: Array
  }
};
</script>

<style scoped lang="scss">
@import "./../../css/all.scss";
@import "./../../css/planetInfo.scss";
</style>