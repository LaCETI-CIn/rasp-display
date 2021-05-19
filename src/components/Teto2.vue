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
    'bess/#' (data) {
      this.buff = this.buff + data + '<br>'
    }
  }
}
</script>
