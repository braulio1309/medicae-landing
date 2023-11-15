<template>
  <div>
    <div class="title-deco">
      <h3
        :class="{ 'bg-img': bg }"
        :style="{ 'background-image': 'url(' + bg + ')'}"
      >
        <span>
          {{ text }}
        </span>
      </h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './title-style';
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    bg: {
      type: String,
      default: '',
    },
  },
};
</script>
