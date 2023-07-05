<template>
  <div class="node-prop-edit" v-if="panelVisible">

  </div>
</template>

<script setup>
  import { ref, reactive } from 'vue';
  const panelVisible = ref(false);
  const state = reactive({
    
  });
</script>

<style>
/* .node-prop-edit {} */
</style>