<template>
  <v-card class="profile">
    <div class="person-block">
      <v-avatar class="photo" width="80" height="80">
        <img :src="avatar" :alt="name">
      </v-avatar>
      <div class="name-card">
        <h4>{{ name }}</h4>
        <p>{{ title }}</p>
      </div>
    </div>
    <hr class="divider">
    <div class="action">
      <div class="property">
        <span>
          <i class="ion-ios-thumbs-up" />&nbsp; {{ rating }}%</span>
        <span><i class="ion-ios-briefcase" />&nbsp; {{ exp }} Years</span>
      </div>
      <v-btn
        color="secondary"
        class="button"
      >
        chat
      </v-btn>
    </div>
  </v-card>
</template>

<style lang="scss" scoped>
@import './card-style.scss';
</style>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    exp: {
      type: Number,
      required: true,
    },
  },
};
</script>
