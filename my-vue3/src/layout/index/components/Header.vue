<template>
  <div class="header-container">
     <div class="system-logo">
       <img src="" alt="">
       <span>{{systemName}}</span>
     </div>
     <div class="menu-container">
       <HeaderMenu :menus="menus" @changeMenu="changeMenu"/>
     </div>
     <div class="user-container">

     </div>
  </div>
</template>

<script>
import HeaderMenu from './HeaderMenus.vue'
export default {
  name: 'Header',
  components: {
    HeaderMenu
  },
  data() {
    return {
      systemName: '三维展示平台',
      menus: [
        {
          id: 1,
          name: '地图',
          path: '/system/index'
        },
        {
          id: 2,
          name: '测试',
          path: '/system/test'
        }
      ]
    }
  },

  methods: {
    changeMenu(data) {
      // this.$router.push({path: data.path})
    }
  }
}
</script>

<style lang="scss" scoped>
$color: #015baf;
.header-container {
    height: 4.0625rem;
    line-height: 4.0625rem;
    width: 100%;
    background: $color;
    // opacity: 0;
    color: #fff;
    font-size: 1.125rem;
    display: flex;
    justify-content: space-between;
    padding: 0 .625rem;
    box-sizing: border-box;
    .system-logo {
      width: 20%;
      height: 100%;
      font-size: 1.5rem;
    }
    .menu-container {
      width: 60%;
      height: 100%;
    }
    .user-container {
      width: 20%;
      height: 100%;
    }
}
</style>