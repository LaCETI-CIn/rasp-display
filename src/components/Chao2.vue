<template>
  <div class="sub" v-html="buff">
  </div>
</template>

<script>
export default {
  data () {
    return {
      buff: 'Chão 2:<br>'
    }
  },
  mqtt: {
    /** 'VueMqtt/publish2' or '+/publish2' */
    'L7test/#' (data) {
      this.buff = this.buff + data + '<br>'
    }
  }
}
</script>
