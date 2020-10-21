<template>
  <div>
    <ul>
      <li>
        <router-link :to="{ path: '/install/Router' }">安装</router-link>
      </li>
      <li>
        <router-link :to="{ path: '/introduction', props: { name: '介绍' } }"
          >介绍</router-link
        >
      </li>
      <li><router-link :to="{ path: '/bases' }">基础</router-link></li>
      <li><router-link :to="{ path: '/advanced' }">进阶</router-link></li>
      <li>
        <router-link :to="{ path: '/introduction', query: { boolean: true } }"
          >我想变更强</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  width: 30%;
  margin: 0px auto;
  display: flex;
  justify-content: space-around;
  color: aquamarine;
}
ul li {
  list-style: none;
}
</style>
