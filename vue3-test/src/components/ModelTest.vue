<template>
    <div>
        <input
            type="text"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
    </div>
</template>

<script>
export default {
    name: "ModelInput",
    props: ["modelValue"],
    data() {
        return {};
    },
};
</script>

<style></style>
