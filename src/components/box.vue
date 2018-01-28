<template>
  <div class="box">
      <div class="name">
        <span class="circle" :class='{"bg": val.bool}' @click='fn(val)'></span>
        <span>{{val.name}}</span>
      </div>
      <info v-for='(v, key) in val.content' :key='key' :val='v' :index='key' :sIndex='sIndex' :bigVal='val'></info>
      <p>订单留言</p>
  </div>
</template>

<script>
import info from './info'
import Vuex from 'vuex'
let {mapActions} = Vuex
export default {
  name: 'box',
  props: ['val', 'sIndex'],
  components: {
    info
  },
  methods: {
    // fn () {
    //   // 全选
    //   this.$store.dispatch('checkAll', this.val)
    // }
    ...mapActions(
      {fn: 'checkAll'}
    )
  }
}
</script>

<style>
  
</style>
