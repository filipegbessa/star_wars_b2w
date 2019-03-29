<template>
  <button class="sw-botao" :class="estiloDoBotao" @click="trigger()" :disabled="isDisabled">
    {{rotulo}}
    <v-icon>keyboard_arrow_right</v-icon>
  </button>
</template>

<script>
export default {
  props: {
    rotulo: {
      required: true,
      type: String
    },
    isDisabled: Boolean,
    estiloDoBotao: String
  },
  methods: {
    trigger() {
      this.$emit("btnClick");
      return;
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../../css/all.scss";
@import "./../../css/btn.scss";
</style>