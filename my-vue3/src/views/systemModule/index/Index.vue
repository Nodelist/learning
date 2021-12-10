<template>
  <div class="index-container">
    <div class="left-container">
      <LandResource />
      <ForestResources />
      <GrasslandResources />
    </div>
    <div class="right-container">
      <WaterResources />
      <GroundResource />
    </div>
    <div class="bottom-container">
      <UnderGroundResource />
    </div>
  </div>
</template>

<script>
import LandResource from "./components/LandResource.vue";
import ForestResources from "./components/ForestResources.vue";
import GrasslandResources from "./components/GrasslandResources.vue";
import WaterResources from "./components/WaterResources.vue";
import GroundResource from "./components/Ground.vue";
import UnderGroundResource from "./components/UnderGroundResource.vue";
export default {
  name: "SystemIndex",
  components: {
    LandResource,
    ForestResources,
    GrasslandResources,
    WaterResources,
    GroundResource,
    UnderGroundResource,
  },
};
</script>

<style lang="scss" scoped>
.index-container {
  .left-container {
    width: 30%;
  }
}
</style>