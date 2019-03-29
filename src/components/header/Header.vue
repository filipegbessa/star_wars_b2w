<template>
  <header>
    <div class="page_center">
      <div class="logo">
        <img class="fakeImg" src="https://via.placeholder.com/709x285" :alt="title" :title="title">
      </div>
      <div class="logo_mobile">
        <img class="fakeImg" src="https://via.placeholder.com/458x196" :alt="title" :title="title">
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped lang="scss">
@import "./../../css/all.scss";
@import "./../../css/header.scss";
</style>