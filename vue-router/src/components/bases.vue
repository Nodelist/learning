<template>
  <div>
    <span>基础</span>
    <button @click="toRouter">跳转</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toRouter() {
      this.$router.push({ path: "/bases/qtlu", query: { name: "aaaaaa" } });
      //   this.$router.push({ path: "/introduction", query: { name: "aaaaaa" } });
    }
  }
};
</script>

<style></style>
