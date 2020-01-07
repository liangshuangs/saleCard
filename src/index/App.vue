<style>
body{
    height: 100%;
}
#app{
    height: 100%;
}
</style>

<template>
  <div id="app" ref="myApp">
    <router-view></router-view>
  </div>
</template>

<script>
import {scroll} from '@/index/utils/scroll'
export default {
  mounted() {
  },
};
</script>