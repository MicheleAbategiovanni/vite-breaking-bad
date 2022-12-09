<template>
  <div class="loader">
    <div class="spinner-border text-primary" role="status">
    </div>
    <span class="text-dark">Loading...</span>
  </div>
</template>

<script>
export default {
  name: "TheLoader",
};
</script>

<style lang="scss" scoped>

.loader{
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: white !important;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

</style>
