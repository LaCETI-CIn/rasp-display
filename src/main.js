import Vue from "vue";
import App from "./App";
import VueMqtt from "vue-mqtt";

Vue.use(VueMqtt, "wss://mqtt.laceti.com.br:8083", {
  username: "laceti_user",
  password: "laceti_pass",
  clientId: "WebClient-" + parseInt(Math.random() * 100000),
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  template: "<App/>",
  components: { App },
});
