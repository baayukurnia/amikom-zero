<template>
    <div :class="['scroll-view', direction]" id="scroll-view">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'ScrollView',
    props: {
        direction: {
            type: String,
            default: 'y'
        }
    }
}
</script>

<style lang="scss" scoped>
.scroll-view{
    height: 100%;
    width: 100%;
    &.x{overflow-x: auto}
    &.y{overflow-y: auto}
}
</style>