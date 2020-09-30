<template>
  <div>
    介绍
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },

  created() {
    debugger;
    console.log(this.name);
  },
};
</script>

<style></style>
