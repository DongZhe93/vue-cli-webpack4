<template>
    <div class="app">
      <div class="app-body">
        <hello></hello>
        <h3>page1</h3>
      </div>
      <div class="app-footer">v{{version}}</div>
    </div>
</template>

<script>
import Hello from '@/components/hello'
export default {
  name: 'page1',
  components: {
    Hello
  },
  data () {
    return {
      version: window.VUE_CLI_CONFIG.version
    }
  }
}
</script>

<style lang="less" scoped>
  .app-footer{
    text-align: center;
  }
</style>
