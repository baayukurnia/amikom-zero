<template>
    <div class="tab-slider">
        <ul>
            <slot/>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TabSlider'
}
</script>

<style lang="scss" scoped>
.tab-slider{
    overflow-x: auto;
}
</style>