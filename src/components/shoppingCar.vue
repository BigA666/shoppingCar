<template>
  <section>
    <box v-for='(v, k) in $store.state.axiosData' :key='k' :val='v' :sIndex='k'></box>
  </section>
</template>

<script>
import box from './box'
export default {
  name: 'shoppingCar',
  components: {
    box
  },
  mounted () {
    this.$store.dispatch('sAxios')// 请求数据  并删除整个大项
  }
}
</script>

<style>

</style>
