<template>
<div class="painel">
  <h2 h2 class="painel-titulo-teto" @click="visivel = !visivel"> Teto 1 </h2>
    <div class="sub-teto" v-html="buff" v-show="visivel">
    </div>
</div>
</template>



<script>
export default {
  data () {
    return {
      buff: '<br>',
      visivel: false
    }
  },
  mqtt: {
    'iot-bess/sensors' (data) {
      this.buff = data + '<br>'
    }
  }
}
</script>
