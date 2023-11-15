<template>
  <div class="root">
    <v-container class="fixed-width">
      <v-row>
        <v-col cols="12" md="5" class="pa-6">
          <div class="text-center">
            <title-deco :text="$t('medicalLanding.about_title')" :bg="photo" />
          </div>
        </v-col>
        <v-col cols="12" md="7" class="pa-6">
          <h4 class="title-default use-text-subtitle">
            {{ $t('medicalLanding.about_subtitle') }}
          </h4>
          <counter />
          <blockquote>
            {{ $t('medicalLanding.about_quote') }}
          </blockquote>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './about-style';
@import '../Title/title-style';
</style>

<script>
import imgAPI from '@/assets/images/imgAPI';
import Counter from '../Counter';
import TitleDeco from '../Title/WithDecoration';

export default {
  components: {
    Counter,
    TitleDeco,
  },
  data() {
    return {
      photo: imgAPI.medical[1],
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
};
</script>
