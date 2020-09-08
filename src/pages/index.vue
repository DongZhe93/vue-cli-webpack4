// 主界面
<template>
  <div class="app">
    index.html<hello></hello>
    <router-link to="/page1">Go to Page1</router-link>
  </div>
</template>

<script>
import Hello from '@/components/hello'

export default {
  name: 'index',
  components: {
    Hello
  },
  data () {
    return {}
  }
}
</script>
