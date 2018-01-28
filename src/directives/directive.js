import Vue from 'vue'
Vue.directive('swiper', {
  bind (el, binding) {  // 只执行一次 初次绑定时执行
    // console.log('bind')
    // console.log(binding.arg)
    let star, end, stime, etime
    el.addEventListener('touchstart', function (e) {
      star = e.touches[0].clientX
      stime = new Date().getTime()
    })
    el.addEventListener('touchmove', function (e) {
      end = e.touches[0].clientX
      etime = new Date().getTime()
    })
    el.addEventListener('touchend', function (e) {
      let len = star - end
      let time = etime - stime
      end = 0
      // console.log('star===' + star, 'end===' + end)
      // console.log(len)
      if (len > 40 && time < 1000) {
        // console.log(111)
        binding.value(true)
        // console.log('左滑')
      } else if (len < -40 && time < 1000) {
        // console.log(222)
        binding.value(false)
        // console.log('右滑')
      }
    })
  }
  // inserted () { // 被绑定元素插入父节点时调用（只需保证父节点存在，父节点可以是还没插入文档）
  //   console.log('inserted')
  // },
  // update () { // 所在组件的VNode更新时调用 VNode vue编译生成的虚拟节点
  //   console.log('update')
  // },
  // componentUpdated () { // 指令所在组件的VNode 及其子VNode 全部更新后调用
  //   console.log('componentUpdated')
  // },
  // unbind () { // 只调用一次，指令与元素解绑时调用
  //   console.log('unbind')
  // }
})
