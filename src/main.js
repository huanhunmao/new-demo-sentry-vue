import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Vue.config.productionTip = false

Sentry.init({
  dsn: "https://47968f3fbd834d678986a2cb4a56e05a@o1407965.ingest.sentry.io/6743291",
  release: "javascript-vue-demo",
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,

});


new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')