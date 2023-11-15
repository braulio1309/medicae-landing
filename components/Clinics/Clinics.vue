<template>
  <!--<div class="root">
   <div class="parallax-bottom">
      <parallax-oval />
    </div>
    <v-container class="fixed-width">
      <v-row class="spacing6">
        <v-col v-if="isDesktop" cols="12" lg="1" class="pa-6" />
        <v-col cols="12" lg="5" md="6" class="pa-6">
          <h4 class="title-primary mt-10">
            {{ $t('medicalLanding.clinic_title') }}
          </h4>
          <div class="block">
            <div>
              <div v-for="(item, index) in clinicData" :key="index">
                <div
                  data-aos-offset="-50"
                  :delay="(index * 0.3) + 's'"
                  name="fadeInLeftShort"
                  duration="0.3s"
                >
                  <AddressCard
                    :name="item.name"
                    :phone="item.phone"
                    :email="item.email"
                    :address="item.address"
                  />
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="6" class="pa-6">
          <v-card class="map">
            <GoogleMap
              :zoom="5"
              :center="center"
              style="width: 100%; height: 100%"
            >
              <MarkerCluster>
                <Marker
                  v-for="(location, i) in locations"
                  :key="i"
                  :options="{ position: location }"
                />
              </MarkerCluster>
            </GoogleMap>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>-->
</template>

<style lang="scss" scoped>
@import './clinics-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import { GoogleMap, Marker, MarkerCluster } from 'vue3-google-map';
import ParallaxOval from '../Parallax/Oval';
import AddressCard from '../Cards/Address';

export default {
  components: {
    ParallaxOval,
    AddressCard,
    GoogleMap,
    MarkerCluster,
    Marker,
  },
  setup() {
    const center = { lat: 47.815, lng: 15.9819 };
    const locations = [
      {
        lat: 44.933076,
        lng: 15.629058,
      },
      {
        lat: 47.815,
        lng: 15.9819,
      },
      {
        lat: 40.953076,
        lng: 16.21,
      },
      {
        lat: 44.22,
        lng: 16.98,
      },
    ];

    return {
      center,
      locations,
    };
  },
  data() {
    return {
      clinicData: [
        {
          name: 'Central Clinic',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street no.14 Block A',
        },
        {
          name: 'Dental Clinic',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building',
        },
        {
          name: 'Mother and Baby Care',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street no.14 Block A',
        },
        {
          name: 'Orthopedic Clinic',
          phone: '+123 456 78 91',
          email: 'hello@luxi.com',
          address: 'Lorem ipsum street Block C - Vestibullum Building',
        },
      ],
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
