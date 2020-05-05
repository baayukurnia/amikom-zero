<template>
    <div class="list-card">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'ListCard'
}
</script>

<style lang="scss" scoped>
.list-card{
    margin: 25px;
    display: grid;
    gap: 15px; 
}
</style>