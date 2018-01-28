<template>
  <footer>
    <span>
      总金额：¥{{$store.state.sum}}
    </span>
    <span class="btn">申请分期</span>
  </footer>
</template>

<script>
import Vuex from 'vuex'
export default {
  name: 'footer'
}
</script>

<style>

</style>
