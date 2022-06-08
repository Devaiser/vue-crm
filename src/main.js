import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Paginate from 'vuejs-paginate';
import App from './App.vue';
import router from './router';
import store from './store';
import dateFilter from '@/filters/date.filter';
import currencyFilter from '@/filters/currency.filter';
import localizeFilter from '@/filters/localize.filter';
import tooltipDirective from '@/directives/tooltip.directive';
import messagePlugin from '@/utils/message.plugin.js';
import Loader from '@/components/app/Loader';
import 'materialize-css/dist/js/materialize.min';
import './registerServiceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);

Vue.filter('date', dateFilter);
Vue.filter('currency', currencyFilter);
Vue.filter('localize', localizeFilter);

Vue.directive('tooltip', tooltipDirective);

Vue.component('Loader', Loader);
Vue.component('Paginate', Paginate);

firebase.initializeApp({
  apiKey: 'AIzaSyA-hvn2IUAGxMOcZCDnqgFWJe-sU5w09CE',
  authDomain: 'vue-crm-6198b.firebaseapp.com',
  projectId: 'vue-crm-6198b',
  storageBucket: 'vue-crm-6198b.appspot.com',
  messagingSenderId: '339906539255',
  appId: '1:339906539255:web:5d202df50b97969c456df2',
  measurementId: 'G-TPKY0H645X',
});

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount('#app');
  }
});
