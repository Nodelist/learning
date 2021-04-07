import Vue from 'vue'
import { drag } from './drag'
import { checkArray } from './permission/hasItemInarray'

// v-dialogDrag: 弹窗拖拽属性
Vue.directive('dialogDrag', {
  bind(el) {
    drag(el)
  }
})

// 判断数组中是否含有某一项并控制 Dom 的显隐
Vue.directive('permission', {
    inserted(el, binding) {
        let arr = binding.value.arr,
            key = binding.value.key
        if (arr && key) {
            let hasPermission = checkArray(arr, key)
            // 没有权限 移除Dom元素
            if (!hasPermission) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        }
    }
})