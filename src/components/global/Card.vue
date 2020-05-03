<template>
    <div class="card">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style lang="scss" scoped>
.card{
    background: var(--mainbg-color-transparent);
    color: var(--white);
    border-radius: var(--radius);
    padding: 25px;
    position: relative;
}
</style>