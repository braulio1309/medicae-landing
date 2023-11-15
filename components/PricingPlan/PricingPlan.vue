<template>
  <div class="root">
    <div class="decoration">
      <svg fill="#cccccc">
        <use xlink:href="/images/saas/deco-med-bg.svg#main" />
      </svg>
    </div>
    <br>
    <v-container :class="{ fixed: isDesktop } ">
      <h2 class="use-text-title2 text-center">Planes de suscripción</h2>

      <p class="subtitle use-text-subtitle2 text-center">
        Estos son los planes de suscripción que tenemos disponibles
      </p>
      <div class="pricing-wrap text-center">
        <section>
          <v-row>
            <v-col cols="6">
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="200"
                data-aos-duration="400"
                class="item"
              >
                <pricing-card
                  :price="0"
                  :feature-list="feature.basic"
                  title="Basic"
                  desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                  type="basic"
                />
              </div>

            </v-col>
            <v-col cols="6">
              <div
                data-aos="fade-up"
                data-aos-offset="500"
                data-aos-delay="400"
                data-aos-duration="400"
                class="item"
              >
                <pricing-card
                  :price="24"
                  :feature-list="feature.best"
                  title="Best Value"
                  desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                  type="Basic"
                />
              </div>
            </v-col>
          </v-row>
        </section>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './pricing-plan-style.scss';
</style>

<script>
import AOS from 'aos';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';

const featureList = {
  basic: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
  ],
  best: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
    'Vivamus sit amet',
    'Cras convallis lacus orci',
  ],
  pro: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Nulla lobortis nunc',
    'Vitae scelerisque',
    'Duis sed augue',
  ],
  enterprise: [
    'Nam sollicitudin dignissim',
    'Pellentesque ac bibendum ',
    'Vestibulum consequat',
    'Donec commodo',
    'Duis tristique metus',
  ],
};

export default {
  components: {
    'title-main': 'Medicae',
    PricingCard,
  },
  data() {
    return {
      feature: featureList,
    };
  },
  computed: {
    isDesktop() {
      const lgUp = this.$vuetify.display.lgAndUp;
      return lgUp;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
