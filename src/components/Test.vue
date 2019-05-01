<template>
  <div>
    <div>我是测试页面2</div>
    <div><h2>{{mode}}</h2></div>
    <div><span>{{count}}</span></div>
    <div><button @click="count++">+1</button></div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        mode: process.env.VUE_ENV === 'server' ? 'server' : 'client',
        count: 2
      }
    }
  }
</script>
