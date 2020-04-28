import Vue from 'vue';
import VueI18n from 'vue-i18n';

import i18nEN from '../../lang/en.json';
import i18nES from '../../lang/es.json';
import i18nJA from '../../lang/ja.json';

import * as constant from './constant.js';

Vue.use(VueI18n);

const region = process.env.REGION || "US";

const region_data = constant.stripe_regions[region];

const numberFormats = {
  currency: {
    style: 'currency',
    currency: region_data.currency,
  }
};

const locale = region_data.langs[0] || 'en';

export default ({ app }) => {
  app.i18n = new VueI18n({
    // locales: ['en', 'es', 'ja'],
    locale,
    fallbackLocale: defaultLocale,
    messages: {
      en: i18nEN,
      es: i18nES,
      ja: i18nJA,
    },
    numberFormats: {
      en: numberFormats,
      ja: numberFormats
    }
  });
};
