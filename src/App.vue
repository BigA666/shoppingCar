<template>
  <div id="app">
    <myHeader></myHeader>
    <shoppingCar></shoppingCar>
    <myFooter></myFooter>
  </div>
</template>

<script>
import './common/css/font-awesome.min.css'
import './common/css/reset.css'
import './common/css/common.css'
import './common/css/style.css'

import shoppingCar from './components/shoppingCar'
import myHeader from './components/header'
import myFooter from './components/footer'

export default {
  name: 'app',
  components: {
    shoppingCar,
    myHeader,
    myFooter
  }
}
</script>

<style>

</style>
