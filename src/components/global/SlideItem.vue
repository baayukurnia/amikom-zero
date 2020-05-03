<template>
    <div :class="['slide-item', {'active' : active}]">
        <slot/>
        <svg class="appearance oval" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="69.895" height="69.895" viewBox="0 0 69.895 69.895"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M34.947,69.895a34.957,34.957,0,0,1-13.6-67.148,34.956,34.956,0,0,1,27.206,64.4A34.728,34.728,0,0,1,34.947,69.895Zm0-54.122A19.174,19.174,0,1,0,54.121,34.947,19.2,19.2,0,0,0,34.947,15.773Z" fill="url(#a)"/></svg>
        <svg class="appearance square" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="61.425" height="61.425" viewBox="0 0 61.425 61.425"><defs><linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0.149"/></linearGradient></defs><path d="M59.425,61.425H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H59.425a2,2,0,0,1,2,2V59.425A2,2,0,0,1,59.425,61.425Zm-41.85-44.85a1,1,0,0,0-1,1V45.8a1,1,0,0,0,1,1H45.8a1,1,0,0,0,1-1V17.575a1,1,0,0,0-1-1Z" fill="url(#a)"/></svg>
    </div>
</template>

<script>
export default {
    name: 'SlideItem',
    props: {
        active: Boolean
    }
}
</script>

<style lang="scss" scoped>
.slide-item{
    position: relative;
    margin-right: 15px;
    margin-top: 2px;
    margin-bottom: 2px;
    text-align: center;
    border-radius: 10px;
    box-shadow: inset 0 0 0 2px var(--border-color);
    font-weight: 700;
    text-transform: capitalize;
    transition: .3s;
    overflow: hidden;
    cursor: pointer;
    a{
        display: block;
        padding: 18px 25px;
    }
    &.active{
        a{
            color: white;  
        } 
        box-shadow: 0 0 0 0 transparent;  
        overflow: hidden;
        background: linear-gradient(30deg, var(--icon-gradientx), var(--icon-gradienty));
        .appearance{
            &.oval{
                left: -50px;
                bottom: -60px;
                opacity: .15;
            }
            &.square{
                right: -50px;
                top: -70px;
                opacity: .25;
            }
        }
    }
    .appearance{
        pointer-events: none;
        position: absolute;
        width: 100px;
        height: 100px;
        opacity: 0;

        &.oval{
            left: -50px;
            bottom: -60px;
            opacity: 0;
        }
        &.square{
            right: -50px;
            top: -70px;
            opacity: 0;
        }
    }
}
</style>