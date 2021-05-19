<template>
  <div class="sub" v-html="buff" @dblclick="visivel = !visivel" v-show="visivel">
  </div>
</template>

<script>
export default {
  data () {
    return {
      buff: 'Chão 2:<br>',
      visivel: true
    }
  },
  mqtt: {
    'bess/#' (data) {
      this.buff = this.buff + data + '<br>'
    }
  }
}
</script>
