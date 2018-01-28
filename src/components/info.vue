<template>
  <div class="info" v-swiper:left='leftSwiper'>
    <p>
      <span class="square" @click='fn' :class='{"bg":val.bool}'></span>
      {{val.name}}
    </p>
    <div class="infoMain">
       <span>单价：¥{{val.price}}</span>
       <span class="price">总价格：¥{{val.price*val.number}}</span>
       <div class="add">
           <span @click='add("-")'> - </span>
           <span>{{val.number}}</span>
           <span @click='add("+")'> + </span>
       </div>
       <div class="del" :class='{"swiper": sBool}' @click='del'>
           删除
           <span>&times;</span>
       </div>
    </div>
  </div>
</template>

<script>
import Vuex from 'vuex'
let {mapActions} = Vuex
import '../directives/directive.js'
export default {
  name: 'info',
  props: ['val', 'sIndex', 'index', 'bigVal'],
  data () {
    return {
      sBool: false
    }
  },
  methods: {
    add (con) {
      this.$store.dispatch('add', [this.val, con])  // 加减
    },
    fn () {
      // 单选
      this.val.bool = !this.val.bool
      let obj = {
        ...mapActions(['isCheckAll', 'fAxios'])
      }
      obj.fAxios.call(this)
      obj.isCheckAll.call(this, this.bigVal)
      // this.$store.dispatch('isCheckAll', this.bigVal)// 判断是否全选
      // this.$store.dispatch('fAxios')  // 重置金额  计算总金额
    },
    leftSwiper (bool) { // 滑动事件
      this.sBool = bool
    },
    del () { // 点击删除
      this.sBool = false
      // sIndex === 第一层 ，index ===第二层  !!!注意  只能传一个参数
      this.$store.dispatch('del', [this.sIndex, this.index])
    }
  }
}
</script>

<style>

</style>
