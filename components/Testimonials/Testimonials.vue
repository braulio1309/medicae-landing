<template>
  <div class="root">
    <div v-if="loaded" class="carousel">
      <splide
        ref="slick"
        :options="slickOptions"
      >
        <splide-slide
          v-for="(item, index) in testiContent"
          :key="index"
        >
          <div class="item">
            <testimonial-card
              :avatar="item.avatar"
              :title="item.title"
              :name="item.name"
              :text="item.text"
              :star="item.rating"
            />
          </div>
        </splide-slide>
        <splide-slide>
          <div class="item">
            <div class="item-props item-props-last" />
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="floating-title">
      <v-container class="fixed-width">
        <div class="title">
          <title-icon
            :text="$t('medicalLanding.testimonial_title')"
            icon="mdi-format-quote-close"
          />
        </div>
      </v-container>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './testi-style.scss';
</style>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import imgAPI from '@/assets/images/imgAPI';
import TestimonialCard from '../Cards/Testimonial';
import TitleIcon from '../Title/WithIcon';

export default {
  components: {
    TestimonialCard,
    TitleIcon,
    Splide,
    SplideSlide,
  },
  data() {
    return {
      loaded: false,
      testiContent: [
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Athlete',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Housewife',
          rating: 4,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[2],
          name: 'Jena Doe',
          title: 'Profesional',
          rating: 4,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[3],
          name: 'Jovelin Doe',
          title: 'Profesional',
          rating: 3,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[4],
          name: 'Jihan Doe',
          title: 'Housewife',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[6],
          name: 'Jovelin Doe',
          title: 'Profesional',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[7],
          name: 'John Doe',
          title: 'Carpenter',
          rating: 4,
        },
        {
          text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
          avatar: imgAPI.avatar[10],
          name: 'John Doe',
          title: 'Athlete',
          rating: 5,
        },
        {
          text:
            'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
          avatar: imgAPI.avatar[1],
          name: 'Jean Doe',
          title: 'Student',
          rating: 4,
        },
      ],
      slickOptions: {
        pagination: true,
        speed: 500,
        arrows: false,
        perPage: 2,
        perMove: 1,
        autoWidth: true,
        direction: 'ltr',
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
        },
        breakpoints: {
          1100: {
            perPage: 2,
            type: 'loop',
          },
        },
      },
    };
  },
  mounted() {
    this.loaded = true;
    const props = window.innerWidth > 1400 ? 1 : 2; // div.carousel-props length for screen < 1400px and (-1) for screen > 1400px
    const lastSlide = Math.floor(this.testiContent.length + props - this.slickOptions.perPage);

    setTimeout(() => {
      if (this.$vuetify.locale.isRtl) {
        this.slickOptions.direction = 'rtl';
      } else {
        this.slickOptions.direction = 'ltr';
      }

      if (window.innerWidth > 1279) {
        this.$refs.slick.go(lastSlide);
      }
    }, 100);
  },
};
</script>
