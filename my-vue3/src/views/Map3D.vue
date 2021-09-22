<template>
    <div id="map3D"></div>
</template>

<script lang="ts">
declare const window: any;
let viewer: any
export default {
    name: "Map3D",
    mounted() {
        viewer = new window.Cesium.Viewer('map3D')
        viewer.scene.open("http://192.168.30.100:8090/iserver/services/3D-TKuang/rest/realspace")
        // let credit = viewer.scene.frameState.creditDisplay
        // credit.container.removeChild(credit._cesiumCreditContainer)
        // credit.container.removeChild(credit._expandLink)
    }
}
</script>

<style scoped>
#map3D {
    width: 100%;
    height: 100%;
}
</style>