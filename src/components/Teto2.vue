<template>
  <div class="sub" v-html="buff">
  </div>
</template>

<script>
export default {
  data () {
    return {
      buff: 'Teto 2:<br>'
    }
  },
  mqtt: {
    'iot-bess/sensors' (data) {
      this.buff = data + '<br>'
    }
  }
}
</script>
