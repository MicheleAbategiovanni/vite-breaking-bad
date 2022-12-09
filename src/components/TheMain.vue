<template>
  <main>

    <div class="container p-5">
      
      <Filter @search="onSearch" />

      <!-- Container Card -->
      <div class="bg-white p-5">

        <div class="bg-dark p-3 text-white">
          <h6>Found {{ store.paginationInfo }} characters</h6>
        </div>

        <div class="row row-cols-3 g-5 py-3">

          <div class="col" v-for="character in store.charactersList">

            <Character :character="character"></Character>

          </div>

        </div>

      </div>

    </div>

  </main>
</template>

<script>
import { fetchCharacters, store } from "../store";
import Filter from "./Filter.vue";
import Character from "./Character.vue";

export default {
  components: {Filter, Character},
  data() {
    return {
      store,

    };
  },
  methods: {

    onSearch (filtersEmitted) {
      this.store.activeFilters = filtersEmitted;

      fetchCharacters();

      console.log(filtersEmitted);
    }

  },
  computed: {


  },
  created() {
    fetchCharacters();
  },
};
</script>

<style lang="scss" scoped>
.card {
  background-color: rgb(48 58 69);
}
</style>
