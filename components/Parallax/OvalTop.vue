<template>
  <div class="parallax-wrap">
    <div class="inner-parallax about">
      <div class="figure">
        <div v-if="loaded">
          <scroll-parallax :speed="0.3">
            <div class="parallax-oval parallax-primary" />
          </scroll-parallax>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import './parallax-style.scss';
</style>

<script>
export default {
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
