<template>
    <div id="map3D"></div>
</template>

<script>
export default {
    name: "Map3D",
    mounted() {
        this.$Map3D.init('map3D')
    }
}
</script>

<style scoped>
#map3D {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>