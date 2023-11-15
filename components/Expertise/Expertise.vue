<template>
  <div class="root">
    <v-container>
      <v-row class="spacing8">
        <v-col v-if="isDesktop" cols="12" lg="1" />
        <v-col cols="12" md="5">
          <div :class="{ 'text-center': !isDesktop}">
            <div class="title-deco">
              <div v-if="isDesktop" class="decoration" />
              <title-deco :text="$t('medicalLanding.expertise_title')" />
            </div>
          </div>
          <div>
            <div
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-delay="100"
              data-aos-duration="300"
              class="parallax-wrap"
            >
              <div v-if="loaded" class="parallax-wrap">
                <kinesis-container
                  :duration="1500"
                  easing="cubic-bezier(0.23, 1, 0.32, 1)"
                >
                  <kinesis-element
                    :strength="15"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-green" />
                  </kinesis-element>
                  <kinesis-element
                    :strength="10"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-red" />
                  </kinesis-element>
                  <kinesis-element
                    :strength="30"
                    type="translate"
                    tag="div"
                  >
                    <span class="icon-blue" />
                  </kinesis-element>
                </kinesis-container>
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="6"
          md="7"
        >
          <h4 class="title-default use-text-subtitle">
            {{ $t('medicalLanding.expertise_subtitle') }}
          </h4>
          <p class="desc use-text-paragraph">
            {{ $t('medicalLanding.expertise_paragraph') }}
          </p>
          <hidden point="xsDown">
            <div v-if="loaded" class="running-tag">
              <splide :options="slickOptions">
                <splide-slide
                  v-for="(group, indexGroup) in expertiseList"
                  :key="indexGroup"
                >
                  <div class="tag-group">
                    <span
                      v-for="(item, indexChild) in group"
                      :key="indexChild"
                      class="tag-item"
                    >
                      {{ item }}
                    </span>
                  </div>
                </splide-slide>
              </splide>
            </div>
          </hidden>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './expertise-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import AOS from 'aos';
import TitleDeco from '../Title/WithDecoration';
import Hidden from '../Hidden';

export default {
  components: {
    TitleDeco,
    Hidden,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        direction: 'ttb',
        height: '10rem',
        type: 'loop',
        focus: 'center',
        autoplay: true,
        perPage: 3,
        perMove: 1,
        interval: 5000,
        pagination: false,
        arrows: false,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
      },
      expertiseList: [
        ['Dentist', 'Padriatic', 'Cardiology'],
        ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        ['Reumatologi', 'Andrologi', 'Ortodonsia'],
        ['Dentist', 'Padriatic', 'Cardiology'],
        ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        ['Reumatologi', 'Andrologi', 'Ortodonsia'],
        ['Dentist', 'Padriatic', 'Cardiology'],
        ['Othopaedi', 'Traumatologi', 'Anestesiologi'],
        ['Reumatologi', 'Andrologi', 'Ortodonsia'],
      ],
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    this.loaded = true;
    AOS.init({
      once: true,
    });
  },
};
</script>
