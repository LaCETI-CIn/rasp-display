<template>
  <div id="app">
    <img src="./assets/laceti.jpg" />
    <teto1></teto1>
    <teto2></teto2>
    <chao1></chao1>
    <chao2></chao2>
  </div>
</template>

<script>
import Teto1 from "./components/Teto1";
import Teto2 from "./components/Teto2";
import Chao1 from "./components/Chao1";
import Chao2 from "./components/Chao2";
export default {
  name: "app",
  components: {
    Teto1,
    Teto2,
    Chao1,
    Chao2,
  },
  mounted() {
    this.$mqtt.subscribe("iot-bess/sensors");
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.sub-chao {
  width: 47%;
  float: left;
  border: 1px solid #ccc;
  margin: 20px 1%;
  padding: 20px 0;
}

.painel-titulo-chao {
  width: 47%;
  float: left;
  border: 1px solid #ccc;
  margin: 20px 1%;
  padding: 20px 0;
  }

.sub-teto {
  width: 47%;
  float: left;
  border: 1px solid #ccc;
  margin: 20px 1%;
  padding: 20px 0;
}

.painel-titulo-teto {
  width: 47%;
  float: left;
  border: 1px solid #ccc;
  margin: 20px 1%;
  padding: 20px 0;
  }
</style>
