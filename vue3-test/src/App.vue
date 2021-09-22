<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <ModelInput v-model="inpValue" />
        <!-- :model-value="inpValue" @update:model-value="inpValue = $event" -->
        {{ inpValue }}
    </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ModelInput from "./components/ModelTest.vue";

export default {
    name: "App",
    components: {
        HelloWorld,
        ModelInput,
    },
    data() {
        return {
            inpValue: "qqq",
        };
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
