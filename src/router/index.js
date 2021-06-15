import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes";

const firebaseConfig = {
  apiKey: "AIzaSyBdbPdzbRnAEKVhvIWwBgOzmT4uI3siQhs",
  authDomain: "bhmsii.firebaseapp.com",
  projectId: "bhmsii",
  storageBucket: "bhmsii.appspot.com",
  messagingSenderId: "512967055505",
  appId: "1:512967055505:web:2715ab5c8b30b17cb08730"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.use(VueRouter);

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default function(/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,

    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE
  });

  return Router;
}
Vue.mixin({
  data() {
    return {
      pincodeMain: "45627",
      sensorList: [
        {
          set: "A1",
          sensor: ["AC01", "AC02", "AC03", "TM01", "SG01", "LV01", "LV02"]
        },
        {
          set: "A2",
          sensor: ["AC01", "TM01", "TM02", "LV01"]
        }
      ],
      projectId: "road9"
    };
  }
});
