<template>
  <div class="hello">
    <button @click="Ch">中文</button>
    <button @click="En">English</button>
    <p>{{$t('common.home')}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  methods: {
    Ch () {
      this.$i18n.locale = 'zh'
    },
    En () {
      this.$i18n.locale = 'en'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
