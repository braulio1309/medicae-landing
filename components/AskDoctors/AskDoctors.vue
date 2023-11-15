<template>
  <div class="root">
    <div class="deco" />
    <v-container :class="{ 'fixed-width': mdUp }">
      <div>
        <v-row class="spacing6" justify="center">
          <v-col cols="12" sm="9" md="2" class="pa-0">
            <div
              data-aos="fade-left"
              data-aos-offset="100"
              data-aos-delay="200"
              data-aos-duration="300"
            >
              <div class="side-filter">
                <h4 class="title-primary">
                  {{ $t('medicalLanding.ask_doctors') }}
                </h4>
                <v-list class="nav">
                  <v-list-item
                    v-for="(item, index) in categories"
                    :key="index"
                    :class="{'v-list-item--active': item === value }"
                    class="filter"
                    active-color="primary"
                    @click="value = item"
                  >
                    <v-list-item-title>
                      {{ item }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </div>
            </div>
          </v-col>
          <v-col cols="12" lg="8" md="10" class="pa-6 py-0">
            <div class="massonry">
              <v-row>
                <v-col
                  v-for="(item, index) in doctorsData"
                  :key="index"
                  cols="12"
                  sm="6"
                  class="px-lg-8 px-3 py-3"
                >
                  <div
                    data-aos="fade-up"
                    data-aos-delay="(200 * index)"
                    data-aos-duration="400"
                  >
                    <div>
                      <profile-card
                        :avatar="item.avatar"
                        :name="item.name"
                        :title="item.title"
                        :rating="item.rating"
                        :exp="item.exp"
                      />
                    </div>
                  </div>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './ask-doctors-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import AOS from 'aos';
import imgAPI from '@/assets/images/imgAPI';
import ProfileCard from '../Cards/Profile';

export default {
  components: {
    ProfileCard,
  },
  data() {
    return {
      visible: false,
      index: 0,
      loaded: false,
      item: 0,
      value: 'all',
      categories: [
        'all',
        'orthopedic',
        'nutritionist',
        'pediatric',
        'anaesthestic',
      ],
      doctorsData: [
        {
          avatar: imgAPI.medical[7],
          name: 'Jena Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[12],
          name: 'John Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[8],
          name: 'Jihan Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[10],
          name: 'James Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[11],
          name: 'Jim Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
        {
          avatar: imgAPI.medical[9],
          name: 'Jessy Doe',
          title: 'Pediatric Surgeon',
          rating: 95,
          exp: 4,
        },
      ],
    };
  },
  computed: {
    mdUp() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
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
