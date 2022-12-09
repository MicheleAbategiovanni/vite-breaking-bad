<template>
  <TheLoader v-if="store.loading"></TheLoader>

  <TheHeader />

  <TheMain />
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheMain from "./components/TheMain.vue";
import TheLoader from "./components/TheLoader.vue";
import { store, fetchCharacters } from "./store";

export default {
  components: { TheHeader, TheMain, TheLoader },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss">
@use "./styles/general.scss";

body {
  background-color: rgb(48 58 69);
}
</style>
