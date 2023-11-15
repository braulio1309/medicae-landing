<template>
  <div class="form-wrap">
    <v-snackbar
      v-model="snackbar"
      :timeout="4000"
      location="top right"
      class="notification"
    >
      <div class="action">
        Message Sent
      </div>
      <template #actions>
        <v-btn
          variant="text"
          icon
          @click="snackbar = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <hidden point="mdUp">
      <div class="logo logo-header">
        <nuxt-link :to="routeLink.medical.home">
          <img :src="logo" alt="logo">
        </nuxt-link>
      </div>
    </hidden>
    <hidden point="smDown">
      <v-btn
        :href="routeLink.medical.home"
        icon
        variant="text"
        class="backtohome"
      >
        <i class="ion-ios-home-outline" />
        <i class="ion-ios-arrow-round-back-outline" />
      </v-btn>
    </hidden>
    <v-container class="max-md">
      <h3 class="use-text-title pb-3 text-center">
        {{ $t('common.contact_title') }}
      </h3>
      <p class="desc use-text-subtitle2 text-center">
        {{ $t('common.contact_subtitle') }}
      </p>
      <div class="form">
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-row class="spacing6">
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="name"
                :rules="nameRules"
                :label="$t('common.form_name')"
                class="input"
                variant="underlined"
                color="primary"
                required
              />
            </v-col>
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                :label="$t('common.form_email')"
                class="input"
                variant="underlined"
                color="primary"
                required
              />
            </v-col>
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="phone"
                :label="$t('common.form_phone')"
                class="input"
                variant="underlined"
                color="primary"
              />
            </v-col>
            <v-col cols="12" sm="6" class="pa-6">
              <v-text-field
                v-model="company"
                :label="$t('common.form_company')"
                class="input"
                variant="underlined"
                color="primary"
              />
            </v-col>
            <v-col cols="12" class="pa-6">
              <v-textarea
                v-model="message"
                rows="6"
                class="input"
                variant="underlined"
                color="primary"
                :label="$t('common.form_message')"
              />
            </v-col>
          </v-row>
          <div class="btn-area">
            <div class="form-control-label">
              <v-checkbox
                v-model="checkbox"
                color="primary"
                :rules="[v => !!v || 'You must agree to continue!']"
                :label="$t('common.form_terms')"
                :hide-details="hideDetail"
                required
              />
              <a href="#" class="mx-3">
                {{ $t('common.form_privacy') }}
              </a>
            </div>
            <v-btn
              color="primary"
              size="large"
              @click="validate"
            >
              {{ $t('common.form_send') }}
              <v-icon class="right-icon">
                mdi-send
              </v-icon>
            </v-btn>
          </div>
        </v-form>
      </div>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
@import './form-style.scss';
@import '../Title/title-style.scss';
</style>

<script>
import logo from '@/assets/images/medical-logo.png';
import brand from '@/assets/text/brand';
import link from '@/assets/text/link';
import Hidden from '../Hidden';

export default {
  components: {
    Hidden,
  },
  data() {
    return {
      valid: true,
      snackbar: false,
      name: '',
      hideDetail: true,
      nameRules: [v => !!v || 'Name is required'],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      phone: '',
      company: '',
      message: '',
      checkbox: false,
      logo,
      brand,
      routeLink: link,
    };
  },
  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate();

      if (valid) {
        this.snackbar = true;
        this.hideDetail = true;
      } else {
        this.hideDetail = false;
      }
    },
  },
};
</script>
