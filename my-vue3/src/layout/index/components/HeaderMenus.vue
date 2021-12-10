<template>
  <div class="menus-container">
      <span v-for="item in menus" :key="item.id" :class="['menu-item', {active: activeId === item.id}]" @click="changeMenu(item)">
          {{item.name}}
      </span>
  </div>
</template>

<script>
export default {
  props: {
    menus: Array
  },
  data() {
    return {
      activeId: Number
    }
  },
  setup(props) {
  },
  mounted() {
    this.activeId = this.menus[0].id
  },
  methods: {
    changeMenu(data) {
      this.activeId = data.id
      this.$emit('changeMenu', data)
    }
  }
}
</script>

<style lang="scss" scoped>
.menus-container {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .menu-item {
    padding: 0 1.875rem;
    height: 100%;
    cursor: pointer;
  }
  .active {
    background: cornflowerblue;
  }
}
</style>