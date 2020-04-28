<template>
    <div class="scroll-view" id="scroll-view">
        <slot/>
    </div>
</template>

<style lang="scss" scoped>
.scroll-view{
    height: 100%;
    overflow-y: auto;
}
</style>