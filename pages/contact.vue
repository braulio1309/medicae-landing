<template>
  <div class="main-wrap">
    <decoration />
    <contact />
  </div>
</template>

<style scoped lang="scss">
.main-wrap {
  position: relative;
  .v-theme--dark & {
    background-color: $dark-background-default;
  }
  .v-theme--light & {
    background-color: $light-background-paper;
  }
}
</style>

<script>
import Contact from '@/components/Forms/Contact';
import Decoration from '@/components/Forms/Decoration';
import brand from '@/assets/text/brand';
import { defineNuxtComponent } from '#app';

export default defineNuxtComponent({
  components: {
    Contact,
    Decoration,
  },
  head() {
    return {
      title: brand.medical.name + ' - Contact',
    };
  },
});
</script>
