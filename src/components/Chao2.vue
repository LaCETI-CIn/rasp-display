<template>
<div class="painel">
  <h2 h2 class="painel-titulo-chao" @click="visivel = !visivel"> Chão 2 </h2>
    <div class="sub-chao" v-html="buff" v-show="visivel">
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
