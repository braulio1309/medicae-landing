<template>
  <div class="root">
    <div class="carousel-handle">
      <div v-if="loaded" class="carousel-wrap">
        <splide
          ref="slick"
          :options="slickOptions"
        >
          <splide-slide
            v-for="(item, index) in facilityList"
            :key="index"
          >
            <div class="item">
              <card
                :title="item.title"
                :desc="item.desc"
                :img="item.img"
                :button="$t('medicalLanding.services_button')"
              />
            </div>
          </splide-slide>
          <splide-slide>
            <div class="item">
              <div class="carousel-prop">
                <div />
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('medicalLanding.services_title')"
            icon="mdi-plus-box-multiple"
            extended
          />
          <nav class="arrow">
            <v-btn
              icon
              size="small"
              aria-label="next"
              class="margin"
              @click="next()"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-btn
              icon
              size="small"
              aria-label="prev"
              class="margin"
              @click="prev()"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </nav>
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './facilities-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgApi from '@/assets/images/imgAPI';
import Card from '../Cards/Default';
import TitleIcon from '../Title/WithIcon';

export default {
  components: {
    Card,
    TitleIcon,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      slickOptions: {
        pagination: false,
        speed: 500,
        perPage: 4,
        arrows: false,
        perMove: 1,
        direction: 'ltr',
        autoWidth: true,
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 4,
          },
          800: {
            perPage: 2,
          },
          600: {
            perPage: 1,
          },
        },
      },
      facilityList: [
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgApi.medical[3],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgApi.medical[6],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgApi.medical[5],
        },
        {
          title: 'Lorem Ipsum',
          desc:
            'Proin ac arcu nisl. Duis eu molestie lectus. Nam quis mauris faucibus, aliquet elit eu, rhoncus ipsum.',
          img: imgApi.medical[4],
        },
        {
          title: 'Etiam rhoncus',
          desc:
            'Proin quis pellentesque dui. Ut sed leo neque. Nullam aliquet iaculis neque a commodo.',
          img: imgApi.medical[3],
        },
        {
          title: 'Duis fermentum',
          desc:
            'Quisque consectetur lectus vel orci porttitor gravida ac eu erat. Nullam accumsan nibh tortor.',
          img: imgApi.medical[2],
        },
      ],
    };
  },
  mounted() {
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(
      this.facilityList.length + props - this.slickOptions.perPage,
    );
    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }

      if (window.innerWidth > 1200) {
        this.$refs.slick.go(lastSlide);
      }
    }, 100);
  },
  methods: {
    next() {
      this.$refs.slick.go('>');
    },
    prev() {
      this.$refs.slick.go('<');
    },
  },
};
</script>
