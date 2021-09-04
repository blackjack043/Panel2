import "vuetify/dist/vuetify.min.css";
import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from './router';
import VueRouter from 'vue-router';
import VueEllipseProgress from 'vue-ellipse-progress';
import VueApexCharts from 'vue-apexcharts';

Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = true;
Vue.use(VueRouter);
Vue.use(Vuetify);
Vue.use(VueEllipseProgress);

new Vue({
  el: "#app",
  router, 
  vuetify: new Vuetify(),
  render: (h) => h(App)
});
