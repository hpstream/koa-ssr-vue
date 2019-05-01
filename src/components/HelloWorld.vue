<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

var url = 'https://api.coindesk.com/v1/bpi/currentprice.json'
export default {
  name: 'HelloWorld',
  asyncData () {
    return axios.get(url)
      .then(res => {
        return {
          msg: res.data.chartName
        }
      })
  },
  data () {
    return {
      msg: 'demo ssr'
    }
  },
  beforeCreate () {
    // console.log('beforeCreate')
  },
  async created () {
    var res = await this.$options.asyncData()
    Object.assign(this.$data, res)
    // console.log(this.$data)
    // console.log('created')
  },
  async mounted () {
    // await this.$options.asyncData()
    // for (var key in data) {
    //   this[key] = data[key]
    // }
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
