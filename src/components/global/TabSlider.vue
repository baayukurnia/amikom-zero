<template>
    <div class="tab-slider">
        <div class="spacer"></div>
        <slot/>
        <div class="spacer"></div>
    </div>
</template>

<script>
export default {
    name: 'TabSlider'
}
</script>

<style lang="scss" scoped>
.tab-slider{
    overflow-y: hidden;
    overflow-x: auto;
    display: flex;
    .spacer{
        padding: 0 10px;
        height: auto;
    }
}
</style>